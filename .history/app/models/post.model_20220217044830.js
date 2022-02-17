import { DataTypes } from "sequelize";
import db from "../config/database";
import User from "./user.model";


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

User.hasMany(Post,{
    foreignKey:{
        allowNull: false
    }
});
Post.belongsTo(User);

export default Post;