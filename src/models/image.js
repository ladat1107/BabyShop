'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            //item-image
            Image.belongsTo(models.Item);

        }
    }
    Image.init({
        itemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        imageName: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },

    }, {
        sequelize,
        modelName: 'Image',
    });
    return Image;
};