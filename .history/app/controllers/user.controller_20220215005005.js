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
    })
}
export const findOne = (req, res) => {

}
export const findAll = (req, res) => {

}
export const update = (req, res) => {

}
export const deleteByID = (req, res) => {

}
export const deleteAll = (req, res) => {

}