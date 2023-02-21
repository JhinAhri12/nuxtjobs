import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    assertMethod(event, ['GET']);
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
    
})
