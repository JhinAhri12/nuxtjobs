import { defineEventHandler, assertMethod, getQuery } from 'h3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const job = defineEventHandler(async (event) => {
  assertMethod(event, ["GET"]);
  const strQuery = await getQuery(event);
  if (strQuery.query === "orderBy") {
    try {
      const jobs = await prisma.job.findMany({
        orderBy: { society: "asc" },
        take: 6
      });
      return jobs;
    } catch (error) {
      console.log(error);
    }
  }
  if (strQuery.query === "getById") {
    try {
      const job = await prisma.job.findFirst({
        where: { id: parseInt(strQuery.params) }
      });
      return job;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const jobs = await prisma.job.findMany({
        orderBy: { id: "desc" },
        take: 6
      });
      return jobs;
    } catch (error) {
      console.log(error);
    }
  }
});

export { job as default };
//# sourceMappingURL=job.mjs.map
