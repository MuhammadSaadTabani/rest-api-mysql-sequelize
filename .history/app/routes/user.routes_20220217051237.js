import * as user from '../controllers/user.controller';
import express from 'express';

export default () => {
    const router = express.Router();

    router.get('/', user.findAll);
    router.get('/postsss/:id', user.getPosts);
    router.post('/', user.create);
    // router.get('/:id', user.findOne);
    router.put('/:id', user.update);
    router.delete('/:id', user.deleteByID);
    router.delete('/', user.deleteAll);

    return router
}