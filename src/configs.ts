import * as dotenv from "dotenv";
dotenv.config();
interface configsInterface {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
  port: string;
}
interface serverInterFace {
  port: number;
}
export let serverConfig: serverInterFace = {
  port: Number(process.env.SERVER_PORT),
};
export let configs: configsInterface;
if (process.env.NODE_ENV === "test") {
  configs = {
    username: process.env.DB_TESTING_USERNAME || "postgres",
    password: process.env.DB_TESTING_PASSWORD || "12345",
    database: process.env.DB_TESTING_DATABASE || "testing",
    dialect: process.env.DB_TESTING_DIALECT || "postgres",
    host: process.env.DB_TESTING_HOST || "localhost",
    port: process.env.DB_TESTING_PORT || "5432",
  };
} else {
  configs = {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "12345",
    database: process.env.DB_DATABASE || "social",
    dialect: process.env.DB_DIALECT || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "5432",
  };
}
