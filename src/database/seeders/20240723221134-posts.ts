"use strict";
import { DataTypes, QueryInterface } from "sequelize";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.bulkInsert("Posts", [
      {
        post_text:
          "IOC enters a new era with the creation of Olympic Esports Games first Games in 2025 in Saudi Arabia",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_text:
          "International Golf Federation, French Golf Federation and Swiss Golf Federation Become Signatories of Sports For Nature Framework",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_text:
          "Man City consider £68m move for Crystal Palaces Eberechi Eze",
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_text:
          "Politics latest: Starmer suspends Labour MPs who rebelled over two-child benefit cap vote; James Cleverly announces Tory leadership bid",
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_text:
          "NVIDIA AI Foundry Builds Custom Llama 3.1 Generative AI Models for the Worlds Enterprises",
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_text:
          "Trump shooting live updates: Biden reacts to Secret Service directors resignation",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_text: "James Cleverly running for Conservative leadership",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_text:
          "Thomas Matthew Crooks: What we know about Donald Trumps attacker",
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_text: "Delta faces probe as CrowdStrike disruption lingers",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_text: "Just Stop Oil: Celebrities condemn long sentences",
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_text: "Celine Dion at Olympics would be great, Macron says",
        user_id: 7,
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
