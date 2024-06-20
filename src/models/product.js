'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //Cate-pro
      Product.belongsTo(models.Category, {
        foreignKey: 'cateId',
        targetKey: 'id',
        as: "catagoryData",
      });
      //Favourite
      Product.belongsToMany(models.User, {
        through: models.Favourite,
        uniqueKey: 'productId',
      });
      //Reserve
      Product.belongsToMany(models.User, {
        through: models.Reserve,
        uniqueKey: 'productId',
      });

      //OrderDetail
      Product.belongsToMany(models.Order, {
        through: models.OrderDetail,
        uniqueKey: 'productId',
      });
    }
  }
  Product.init({
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: DataTypes.TEXT('long'),
    shortDescription: DataTypes.TEXT('long'),
    cateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    image: DataTypes.STRING,
    allImages: DataTypes.TEXT('long'),
    price: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    origin: DataTypes.STRING,
    originBrand: DataTypes.STRING,
    age: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};