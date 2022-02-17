import Post from "../models/post.model"

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

export const deleteByID = (req, res) => {
    
}

export const deleteAll = (req, res) => {
    
}

export const findAll = (req, res) => {
    
}

export const findOne = (req, res) => {
    
}

export const update = (req, res) => {
    
}