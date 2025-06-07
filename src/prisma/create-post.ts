import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function createPost() {
   await prisma.post.create({
        data:{
            title:'GYM',
            content:'jijijio',
            author:{
                connect:{
                    id:1
                }
            }
        }
    })
}

createPost().then(function(res){
    console.log('done creating POST!');
}).catch(function(err){
    console.log(err);
    
})