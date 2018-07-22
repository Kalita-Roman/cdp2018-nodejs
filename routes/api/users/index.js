import { Router } from 'express';
import id from './id';
import { getUsers, postUsers } from 'middlewares/routes/users';

const router = new Router();

router
    .route('/')
    .get(getUsers)
    .post(postUsers);

router.use('/:id', id);

export default router;
    