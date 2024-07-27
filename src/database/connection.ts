import { Sequelize } from "sequelize";
import { configs } from "../configs";

let sequelizeConnection: Sequelize = new Sequelize(
  configs.database,
  configs.username,
  configs.password,
  {
    host: configs.host,
    dialect: "postgres",
    port: Number(configs.port),
    logging: false,
  }
);
export default sequelizeConnection;
