const { DataTypes, UUIDV4 } = require("sequelize");
const sequelize = require('../database')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'username'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profile: {
        type: DataTypes.JSON,
        allowNull: true
    },
    addedBy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    updatedBy: {
        type: DataTypes.STRING,
        allowNull: true
    },
    archived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, { paranoid: true, })

module.exports = User;












