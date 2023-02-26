import { defineEventHandler, assertMethod, readBody, createError } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const manageApplication = defineEventHandler(async (event) => {
  assertMethod(event, ["POST", "PATCH", "DELETE"]);
  const body = await readBody(event);
  if (body.event === "APPLICATION_JOB") {
    let user = await prisma.user.findFirst({
      where: {
        email: body.email
      }
    });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: body.email
        }
      });
    }
    const application = await prisma.application.create({
      data: {
        user: {
          connect: { email: body.email }
        },
        job: {
          connect: { society: body.society }
        }
      }
    });
    if (!application) {
      throw createError({
        statusCode: 404,
        statusMessage: "Application not created"
      });
    } else {
      return application;
    }
  }
});

export { manageApplication as default };
//# sourceMappingURL=manageApplication.mjs.map
