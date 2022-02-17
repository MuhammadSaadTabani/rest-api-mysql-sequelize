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
        attributes: ['id', ['name', 'new name'], 'email'],
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
        if(data.length == 0){
            return res.json({
                success: true,
                message: "User Not Founasdd",
                data
            });
        }
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
        });
    });
}
export const deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: true
    })
    .then(()=>{
        res.json({
            success: true,
            message: "All Users Deleted Successfully"
        });
    })
    .catch((err)=>{
        res.json({
            success: false,
            message: err.message
        })
    })
}

export const getPosts = (req, res) => {
    return res.json({as:1})
    const id = req.params.id
    User.getPosts()
    .then(()=>{
        res.json({
            success: true,
            message: "suxes"
        });
    })
    .catch((err)=>{
        res.json({
            success: false,
            message: err.message
        })
    })
}