const { DataTypes, Model } = require('sequelize');
const { postgres } = require('../../../utils/connect');
const { makeModelOptions } = require('../../../utils/methods');

class User extends Model {
    userName
    passWord
    email
    isAuth
    dob
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        allowNull: false,
        defaultValue: null,
        type: DataTypes.STRING(50)
    },
    passWord: {
        allowNull: false,
        defaultValue: null,
        type: DataTypes.STRING(50)
    },
    email: {
        allowNull: false,
        defaultValue: null,
        type: DataTypes.STRING(70),
        primaryKey: true
    },
    isAuth: {
        allowNull: true,
        defaultValue: false,
        type: DataTypes.BOOLEAN
    },
    dob: {
        allowNull: false,
        defaultValue: null,
        type: DataTypes.DATE
    }
}, makeModelOptions(postgres.client, 'Users'))



module.exports.User = User