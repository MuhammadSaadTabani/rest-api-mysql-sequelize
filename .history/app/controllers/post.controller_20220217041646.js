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

export const findAll = (req, res) => {
    Post.findAll()
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