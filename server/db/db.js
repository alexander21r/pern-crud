import Sequelize from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.MASTER_USERNAME,
  process.env.MASTER_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
