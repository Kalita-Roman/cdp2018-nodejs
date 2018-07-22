import { Router } from 'express';
import { getUserById, deleteUserById } from 'middlewares/routes/users';

const router =  new Router({mergeParams: true});


router
    .route('/')
    .get(getUserById)
    .delete(deleteUserById);

export default router;