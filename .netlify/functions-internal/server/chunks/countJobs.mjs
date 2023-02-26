import { defineEventHandler, assertMethod } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const countJobs = defineEventHandler(async (event) => {
  assertMethod(event, ["GET"]);
  try {
    const publishedJobs = await prisma.job.aggregate({
      _count: { _all: true }
    });
    return publishedJobs;
  } catch (error) {
    console.log(error);
  }
});

export { countJobs as default };
//# sourceMappingURL=countJobs.mjs.map
