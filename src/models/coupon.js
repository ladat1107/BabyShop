'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // USE
      Coupon.belongsToMany(models.User, {
        through: models.UserCoupon,
        uniqueKey: 'couponId',
      });

      //HAS
      Coupon.hasMany(models.Order, {
        foreignKey: 'couponId',
        as: "couponData",
      });
    }
  }
  Coupon.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    discountAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    percentDecrease: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    exp: {
      type: DataTypes.DATE,
    },
    mfg: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};