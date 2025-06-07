import { getClient } from "./utils";

async function InsertData(){
   const client = await getClient();

   const insertUserQuery = `
    INSERT INTO users (email,password)
    VALUES ($1,$2); // $1 and $2 to avoid sql injection otherwise if someone enters a email say ram123@gmail.com AND DROP TABLE users; this will drop the table but using this given whole string will put into the database
   `
   const userValues = ['saroj123@gmail.com','1234567'];
   const val = await client.query(insertUserQuery,userValues);

   const insertTodoQuery = `
   INSERT INTO todos (title,description,userId)
   VALUES ($1,$2,$3);
  `
   const todoValues = ['GYM','DO 1 push up, 30 min plank',val.rows[0].id]
   await client.query(insertTodoQuery,todoValues);
}
InsertData();