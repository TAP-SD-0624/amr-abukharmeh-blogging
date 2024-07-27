"use strict";
import { DataTypes, QueryInterface } from "sequelize";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("PostsCategories", [
      {
        post_id: 1,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 1,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 2,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 2,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 3,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 4,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 5,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 5,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 6,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 7,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 8,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 9,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 9,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 10,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 11,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 11,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 11,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
