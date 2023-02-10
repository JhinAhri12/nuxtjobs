import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    assertMethod(event, ['GET']);
        try {
            const jobs = await prisma.job.findMany({
                take: 6,
            });
            return jobs;
        }
        catch (error) {
            console.log(error)
        }
    
})
