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
function InsertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, utils_1.getClient)();
        const insertUserQuery = `
    INSERT INTO users (email,password)
    VALUES ($1,$2); // $1 and $2 to avoid sql injection otherwise if someone enters a email say ram123@gmail.com AND DROP TABLE users; this will drop the table but using this given whole string will put into the database
   `;
        const userValues = ['saroj123@gmail.com', '1234567'];
        const val = yield client.query(insertUserQuery, userValues);
        const insertTodoQuery = `
   INSERT INTO todos (title,description,userId)
   VALUES ($1,$2,$3);
  `;
        const todoValues = ['GYM', 'DO 1 push up, 30 min plank', val.rows[0].id];
        yield client.query(insertTodoQuery, todoValues);
    });
}
InsertData();
