'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderDate: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false,
      },
      deliveryDate: {
        type: Sequelize.DATE,
        allowNull: true,
        unique: false,
      },
      totalPrice: {
        type: Sequelize.DECIMAL(11, 3),
        allowNull: true,
        unique: false,
      },
      shippingAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      paymentMethod: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      shippingPrice: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      discountPrice: {
        type: Sequelize.DECIMAL(11, 3),
        allowNull: true,
        unique: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      couponId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: false,
      },
      paymentStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        unique: false,
      },
      orderStatus: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Orders');
  }
};