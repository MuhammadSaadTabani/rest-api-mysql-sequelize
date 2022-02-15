import {DataTypes} from "sequelize";
import db from "../config/database";


const User = db.define('user', {
    name: {
        type: DataTypes.STRING(50),
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(55),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
    },
    address: {
        type: DataTypes.STRING(100)
    },
    isDeleted: {
        type: DataTypes.TINYINT,
        defaultValue: false,
    },
    isSubscribed: {
        type: DataTypes.TINYINT,
        defaultValue: false,
    }
})

export default User;