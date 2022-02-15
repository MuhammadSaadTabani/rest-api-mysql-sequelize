import * as user from '../controllers/user.controller';
import express from 'express';

export default () => {
    const router = express.Router();

    router.get('/', user.findAll);
    router.post('/', user.create);
    router.get('/:id', user.findOne)
    router.put('/:id', user.update)
    router.delete('/:id', user.deleteByID)

    return router
}