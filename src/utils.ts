import {Client} from 'pg'
import dotenv from 'dotenv'
dotenv.config()
export const getClient = async ()=>{
    const client = new Client(`postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/crudoperation`);
    await client.connect();
    return client;
}