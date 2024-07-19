import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const DATABASE = process.env.database;
const USERNAME = process.env.user;
const PASSWORD = process.env.password;
const HOST = process.env.host;
console.log(DATABASE, USERNAME, PASSWORD, HOST);
const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'postgres'
});
export default sequelize;
