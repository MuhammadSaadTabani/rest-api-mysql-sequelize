import db from "../config/database";
import User from "../models/user.model";

export const create = (req, res) => {
    User.create(req.body)
    .then(()=>{
        res.json({
            success: true,
            message: "User Created Successfully"
        });
    })
    .catch((err)=>{
        res.json({
            success: false,
            message: err.message
        })
    });
}
export const findAll = (req, res) => {
    // User.findAll({order: [['id', 'DESC']]})
    User.findAll({attributes: ['id', ['name', 'new name'], 'email']})
    .then((data)=>{
        res.json({
            success: true,
            message: "Users Retrieved Successfully",
            data
        });
    })
    .catch((err)=>{
        res.json({
            success: false,
            message: err.message
        })
    });
}
export const findOne = (req, res) => {
    // User.find
}
export const update = (req, res) => {

}
export const deleteByID = (req, res) => {

}
export const deleteAll = (req, res) => {

}