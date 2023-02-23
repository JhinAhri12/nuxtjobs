import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    assertMethod(event, ['POST', 'PATCH', 'DELETE']);
    const body = await readBody(event)

    // add one job application
    if (body.event === 'APPLICATION_JOB'){
        const user = await prisma.user.create({
            data: {
              email: 'vlad@prisma.io',
              name: ''
          }
        })

        if(!user){
            throw createError({
              statusCode :404, 
              statusMessage : 'User not created'});
            
          }
        const application = await prisma.application.create({
            data: {
              users: {
                connect: [{ id: 1 }],
              },
              jobs: {
                connect: [{ id: 1 }],
              },
            },
            include: {
              users: true, // Include all posts in the returned object
              posts: true
            },
          })
          if(!application){
            throw createError({
              statusCode :404, 
              statusMessage : 'Application not created'});
            
          }
    }
    
});