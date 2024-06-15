'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Pro-Item
      Item.belongsTo(models.Product);

      //item-image
      Item.hasMany(models.Image, {
        foreignKey: 'itemId',
      });

      //Favourite
      Item.belongsToMany(models.User, {
        through: models.Favourite,
        uniqueKey: 'itemId',
      });
      //Reserve
      Item.belongsToMany(models.User, {
        through: models.Reserve,
        uniqueKey: 'itemId',
      });

      //OrderDetail
      Item.belongsToMany(models.Order, {
        through: models.OrderDetail,
        uniqueKey: 'itemId',
      });
    }
  }
  Item.init({
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    priceOriginal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    priceDiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false,
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      unique: false,
    }
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};