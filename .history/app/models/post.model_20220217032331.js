import { DataTypes } from "sequelize";
import db from "../config/database";


const Post = db.define('Post',{
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

});

export default Post;