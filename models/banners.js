'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Banners extends Model {
        static associate() {}
    }
    Banners.init({
        link: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        sequelize,
        tableName: "banners",
        modelName: 'Banners',
    });
    return Banners;
};