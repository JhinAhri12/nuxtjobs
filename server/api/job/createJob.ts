import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    assertMethod(event, ['POST']);

const body = await readBody(event)

    const job = await prisma.job.create({
        data: {
            society: body.society,
            description: body.description,
        },
      })
    
      if(!job){
        throw createError({
          statusCode :404, 
          statusMessage : 'Job not created'});
        
      }
      return job;
      
})