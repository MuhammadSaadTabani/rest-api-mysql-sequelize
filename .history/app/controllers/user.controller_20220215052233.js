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
    User.findAll({
        attributes: ['sid', ['name', 'new name'], 'email'],
        order: [['id', 'DESC']],
        // where: {id: [11,12,14], isDeleted: 1}
    })
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
    return res.json({
        id: req
    })
    User.findAll({
        where: {id: req.body.id}
    })
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
export const update = (req, res) => {

}
export const deleteByID = (req, res) => {

}
export const deleteAll = (req, res) => {

}