import { defineEventHandler, assertMethod, getQuery } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const application = defineEventHandler(async (event) => {
  assertMethod(event, ["GET"]);
  const strQuery = await getQuery(event);
  const user = await prisma.user.findFirst({
    where: {
      email: strQuery.email
    }
  });
  try {
    const application = await prisma.application.findMany({
      where: { userId: user.id },
      include: {
        job: true
      }
    });
    return application;
  } catch (error) {
    console.log(error);
  }
});

export { application as default };
//# sourceMappingURL=application.mjs.map
