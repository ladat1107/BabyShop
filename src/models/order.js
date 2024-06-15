'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // HAS
      Order.belongsTo(models.Coupon);

      //USER-ORDER
      Order.belongsTo(models.User);
      //OrderDetail
      Order.belongsToMany(models.Item, {
        through: models.OrderDetail,
        uniqueKey: 'orderId',
      });
    }
  }
  Order.init({
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    deliveryDate: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: true,
      unique: false,
    },
    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    shippingPrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    discountPrice: {
      type: DataTypes.DECIMAL(11, 3),
      allowNull: true,
      unique: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    couponId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    paymentStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
    },
    orderStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    }
  }
    , {
      sequelize,
      modelName: 'Order',
    });
  return Order;
};