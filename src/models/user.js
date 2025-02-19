'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [10, 10],
        msg: 'Phone number is error',
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    avatar: DataTypes.STRING,
    roleId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    memberScore: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};