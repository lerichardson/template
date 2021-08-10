import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
// Uncomment for postgres
const sql = new Sequelize(`postgres://postgres:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
// Uncomment for mysql
// const sql = new Sequelize(`mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const connection = sql;

export default connection;