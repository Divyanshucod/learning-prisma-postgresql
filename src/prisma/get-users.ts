import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function getUsers() {
   const allusers = await prisma.user.findMany({
    where:{
        id:1
    }
    })
    console.log(allusers);

    //finding unique user

    const uniquePerson = await prisma.user.findUnique({
        where:{
            id:1
        },
        include:{
            posts:true
        }
    })
    console.log(
        uniquePerson
    );
    
}

getUsers().then(function(res){

}).catch(function(err){
    console.log(err);
    
})