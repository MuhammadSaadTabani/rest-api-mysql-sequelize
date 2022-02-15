import * as user from '../controllers/user.controller';
import express from 'express';

export default userRoutes = (app) => {
    const router = express.Router();

    router.get('/', user.findAll);
    router.post('/', user.create);

    app.use('/api/user', router);
}