'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      size: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      priceOriginal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      priceDiscount: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      stockQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};