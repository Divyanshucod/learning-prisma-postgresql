"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const createUserTableQuery = `
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(225) UNIQUE NOT NULL,
    password VARCHAR(225) NOT NULL
    )
    `;
        yield client.query(createUserTableQuery);
        const createTodoTableQuery = `
    CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    userId INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE
    )`;
        yield client.query(createTodoTableQuery);
        console.log('table created successfully');
    });
}
createTable();
