'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      description: Sequelize.TEXT('long'),
      shortDescription: Sequelize.TEXT('long'),
      cateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stockQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      color: Sequelize.STRING,
      size: Sequelize.STRING,
      image: Sequelize.STRING,
      allImages: Sequelize.TEXT('long'),
      price: Sequelize.INTEGER,
      brand: Sequelize.STRING,
      origin: Sequelize.STRING,
      originBrand: Sequelize.STRING,
      age: Sequelize.STRING,
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable('Products');
  }
};