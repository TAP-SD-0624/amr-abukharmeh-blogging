"use strict";
import { DataTypes, QueryInterface } from "sequelize";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Categories", [
      { category_name: "sports", createdAt: new Date(), updatedAt: new Date() },
      {
        category_name: "political",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { category_name: "tech", createdAt: new Date(), updatedAt: new Date() },
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
