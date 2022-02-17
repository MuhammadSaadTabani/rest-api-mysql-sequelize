import express from "express"
import * as post from "../controllers/post.controller";


export default () => {
    const router  = express.Router();

    router.get('/', post.findAll);
    router.get('/user/:id', post.findByUser);
    router.get('/:id', post.findOne);
    router.post('/', post.create);
    router.put('/', post.update);
    router.delete('/', post.deleteByID);

    return router;
}