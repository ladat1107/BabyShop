'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsTo(models.Category, {
        as: 'parent',
        foreignKey: 'parentId',
        targetKey: 'id',
      });

      // relate parent to child categories
      Category.hasMany(models.Category, {
        as: 'subcategories',
        foreignKey: 'parentId',
      });

      //Cate-pro
      Category.hasMany(models.Product, {
        foreignKey: 'cateId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Category.init({
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    description: DataTypes.TEXT,
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parentId: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};