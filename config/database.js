import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME || 'postgres_prueba' ,
  process.env.DB_USER || 'user2' ,
  process.env.DB_PASSWORD || '123456' , {
  host: process.env.DB_HOST || '127.0.0.1' ,
  dialect: "postgres",
  logging: false,
  port: 5432,
  define: {
    timestamps: false,

    underscored: true
  }
});

export default db;
