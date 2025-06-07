import { getClient } from "./utils";

async function createTable(){
    const client = await getClient();
    const createUserTableQuery = `
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(225) UNIQUE NOT NULL,
    password VARCHAR(225) NOT NULL
    )
    `
    await client.query(createUserTableQuery);

    const createTodoTableQuery = `
    CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    userId INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE
    )`

    await client.query(createTodoTableQuery);

    console.log('table created successfully');
    
}

createTable()