"use strict";
import { DataTypes, QueryInterface } from "sequelize";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Users", [
      { user_name: "amr", createdAt: new Date(), updatedAt: new Date() },
      { user_name: "ahmed", createdAt: new Date(), updatedAt: new Date() },
      { user_name: "hamza", createdAt: new Date(), updatedAt: new Date() },
      { user_name: "khaled", createdAt: new Date(), updatedAt: new Date() },
      { user_name: "mostafa", createdAt: new Date(), updatedAt: new Date() },
      { user_name: "adam", createdAt: new Date(), updatedAt: new Date() },
      { user_name: "noah", createdAt: new Date(), updatedAt: new Date() },
      { user_name: "abu baker", createdAt: new Date(), updatedAt: new Date() },
      { user_name: "essa", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
