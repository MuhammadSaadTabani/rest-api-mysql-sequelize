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
    Post.findAll({include: User})
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
        where: {userId}
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

export const findOne = (req, res) => {
    
}

export const deleteByID = (req, res) => {
    
}

export const deleteAll = (req, res) => {
    
}



export const update = (req, res) => {
    
}