import { getClient } from "./utils";

async function GetData(userId:number){
    const client = await getClient();

    const queryToGetData = `
    SELECT * FROM todos WHERE userId = $1;
    `

    const todos = await client.query(queryToGetData,[userId]);

    console.log(todos.rows);

}
GetData(2)