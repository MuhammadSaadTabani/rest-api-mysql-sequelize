import * as user from '../controllers/user.controller';
import express from 'express';

export default userRoutes = () => {
    const router = express.Router();

    router.get('/', user.findAll);
    router.post('/', user.create);

}