const { DataTypes, Model } = require('sequelize');
const { postgres } = require('../../../utils/connect');
const { makeModelOptions } = require('../../../utils/methods');

postgres.client.sync();

class Product extends Model {
    name
    pic
    price
    isAvailable
    description
    supplier
    category
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        allowNull: false,
        defaultValue: null,
        type: DataTypes.STRING(1000)
    },
    pic: {
        allowNull: false,
        defaultValue: null,
        type: DataTypes.STRING(1000)
    },
    price: {
        allowNull: false,
        defaultValue: null,
        type: DataTypes.STRING(100),
        primaryKey: true
    },
    isAvailable: {
        allowNull: true,
        defaultValue: false,
        type: DataTypes.BOOLEAN
    },
    description: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING(1000)
    },
    supplier: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING(1000)
    },
    category: {
        allowNull: true,
        defaultValue: null,
        type: DataTypes.STRING(1000)
    }
}, makeModelOptions(postgres.client, 'Products'))


module.exports.Product = Product