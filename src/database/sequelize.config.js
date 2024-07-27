// src/database/sequelize.config.js
require('ts-node/register');
const {configs} = require('../configs.ts');
module.exports = {
  username: configs.username,
  password: configs.password,
  database: configs.database,
  dialect: configs.dialect,
  host: configs.host,
  port: configs.port
};
