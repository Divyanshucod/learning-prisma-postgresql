import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
    log:['info','query']
})
// select * from users offset 1 limit 10;
async function main(){
    let res = await prisma.user.findMany({
        take:3, //limit
        skip:10 //offset
    })
}
main()