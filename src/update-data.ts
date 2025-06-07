import { getClient } from "./utils";

async function UpdateData(userId:number){
    const client = await getClient();

    const queryToUpdateData = `
    UPDATE todos SET done = $1 WHERE userId = $2;
    `

    const todos = await client.query(queryToUpdateData,[true,userId]);

    console.log(todos.rows);

}
UpdateData(1)