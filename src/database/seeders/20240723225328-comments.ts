"use strict";
import { DataTypes, QueryInterface } from "sequelize";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Comments", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "agree",
        user_id: 3,
        post_id: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "thums up",
        user_id: 1,
        post_id: 1,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "hmmm?",
        user_id: 2,
        post_id: 2,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "yes :D",
        user_id: 5,
        post_id: 2,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "good",
        user_id: 4,
        post_id: 3,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "great",
        user_id: 7,
        post_id: 3,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "bad",
        user_id: 1,
        post_id: 4,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "loss",
        user_id: 8,
        post_id: 4,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "ok",
        user_id: 9,
        post_id: 5,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "accept",
        user_id: 8,
        post_id: 5,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "respect",
        user_id: 1,
        post_id: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "wow",
        user_id: 5,
        post_id: 6,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "with you",
        user_id: 6,
        post_id: 7,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "thums up",
        user_id: 2,
        post_id: 7,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "yessssssssss",
        user_id: 6,
        post_id: 8,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "noooooooooooo",
        user_id: 7,
        post_id: 8,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "too late",
        user_id: 2,
        post_id: 9,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "yes its too late",
        user_id: 5,
        post_id: 9,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "why?",
        user_id: 7,
        post_id: 10,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "how?",
        user_id: 8,
        post_id: 10,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "boyyyyyy",
        user_id: 1,
        post_id: 11,
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        comment_text: "you are good",
        user_id: 2,
        post_id: 11,
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
