import Post from "../models/post.model"
import User from "../models/user.model"

export const create = (req, res) => {
    Post.create(req.body)
    .then((data)=>{
        res.json({
            success: true,
            message: "Post Published Successfully",
        })
    }).catch(err=>{
        res.json({
            success: false,
            message: err.message || "Failed To Publish Post"
        })
    })
}

export const findAll = (req, res) => {
    // Post.findAll()
    Post.findAll({
        order: [['id', 'DESC']],
        include: User
    })
    .then((data)=>{
        res.json({
            success: true,
            message: "Posts Retrieved Successfully",
            data
        })
        .catch(err=>{
            res.json({
                success: false,
                message: err.message || "Failed to Retrieve Posts"
            })
        })
    })
}
export const findByUser = (req, res) => {
    const userId = req.params.id;
    Post.findAll({
        where: {userId},
        order: [['id', 'DESC']]
    })
    .then((data)=>{
        res.json({
            success: true,
            message: "Posts Retrieved Successfully",
            data
        })
        .catch(err=>{
            res.json({
                success: false,
                message: err.message || "Failed to Retrieve Posts"
            })
        });
    });
}

export const findOne = (req, res) => {
    const id = req.params.id;
    Post.findByPk(id)
    .then((data)=>{
        res.json({
            success: true,
            message: "Post Retrieved Successfully",
            data
        })
        .catch(err=>{
            res.json({
                success: false,
                message: err.message || "Failed to Retrieve Post"
            })
        })
    })
}

export const update = (req, res) => {
    const id = req.params.id;
    Post.update(req.body,{
        where: {id}
    })
    .then((data)=>{
        res.json({
            success: true,
            message: "Post Updated Successfully",
            data
        })
        .catch(err=>{
            res.json({
                success: false,
                message: err.message || "Failed to Update Post"
            })
        })
    })
}

export const deleteByID = (req, res) => {
    const id = req.params.id;
    Post.destroy({
        where: {id}
    })
    .then((data)=>{
        res.json({
            success: true,
            message: "Post Deleted Successfully",
            data
        })
        .catch(err=>{
            res.json({
                success: false,
                message: err.message || "Failed to Delete Post"
            })
        })
    })
}
