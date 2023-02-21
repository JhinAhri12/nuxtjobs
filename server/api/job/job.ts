import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    assertMethod(event, ['GET']);
    const strQuery = await getQuery(event)


    if (strQuery.query === 'orderBy')
    {
        try {
            const jobs = await prisma.job.findMany({
                orderBy: { society: 'asc'},
                take: 6,
            });
            return jobs;
        }
        catch (error) {
            console.log(error)
        }
    }  
    else
    {
        try {
            const jobs = await prisma.job.findMany({
                orderBy: { id: 'desc'},
                take: 6,
            });
            return jobs;
        }
        catch (error) {
            console.log(error)
        }
    }
})
