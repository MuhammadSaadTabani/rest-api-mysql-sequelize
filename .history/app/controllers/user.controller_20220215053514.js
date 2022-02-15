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
    const id = req.params.id
    
    User.findAll({
        where: {id}
    })
    .then((data)=>{
        res.json({
            success: true,
            message: "User Retrieved Successfully",
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
    const id = req.params.id
    User.update(req.body,{
        where: {id}
    })
    .then((data)=>{
        res.json({
            success: true,
            message: "User Updated Successfully",
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
export const deleteByID = (req, res) => {
    const id = req.params.id
    User.destroy({
        where: {id}
    })
    .then((data)=>{
        res.json({
            success: true,
            message: "User Deleted Successfully",
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
export const deleteAll = (req, res) => {

}