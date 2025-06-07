import { getClient } from "./utils";

async function DeleteData(userId:number){
    const client = await getClient();

    const queryToDeleteData = `
    DELETE FROM todos WHERE userId = $1;
    `

    const todos = await client.query(queryToDeleteData,[userId]);

    console.log(todos.rows);

}
DeleteData(1)