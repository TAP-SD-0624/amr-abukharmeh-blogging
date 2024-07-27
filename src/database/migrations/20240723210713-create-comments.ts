'use strict';
import { DataTypes, QueryInterface } from "sequelize";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface :QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment_text: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        // references: { model: 'Users', key: 'id' },
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL'
      },
      post_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Posts', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface :QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.dropTable('Comments');
  }
};