import { Sequelize, DataTypes, Op } from 'sequelize';


const sequelize = new Sequelize(
    "postgres",
    "postgres.fmngjtjvndzofaevwyxa",
    "1408benja1408",
  {
    host: "aws-0-us-west-1.pooler.supabase.com",
    port: 5432,
    dialect: 'postgres',
  },
);


const db = Object.freeze({
  sequelize,
  DataTypes,
  Op,
});

export default db;

