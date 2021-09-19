const sequelize = require('../db');
const { DataTypes } = require('sequelize');



const Like = sequelize.define('like', {
    reg_no: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        validate: {
            is: /[1-2][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/i
        }

    },
    hidden: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Like;

