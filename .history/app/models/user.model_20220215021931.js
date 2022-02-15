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
    phone: {
        type: DataTypes.STRING(20),
    },
    address: {
        type: DataTypes.STRING(100)
    }
})

export default User;