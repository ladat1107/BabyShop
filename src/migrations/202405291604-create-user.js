'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      fullName: {
        allowNull: false,
        unique: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        unique: false,
        type: Sequelize.STRING,
      },
      phoneNumber: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: false,
        unique: false,
        type: Sequelize.BOOLEAN
      },
      avatar: {
        type: Sequelize.STRING
      },
      roleId: {
        allowNull: false,
        unique: false,
        type: Sequelize.STRING
      },
      memberScore: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: Trainer,
        //   key: 'id',
        // },
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
    await queryInterface.dropTable('Users');
  }
};