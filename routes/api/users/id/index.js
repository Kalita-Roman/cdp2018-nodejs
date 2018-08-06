import { Router } from 'express';
import { 
    getUserById,
    putUserById,
    deleteUserById
} from 'middlewares/routes/users';

const router =  new Router({mergeParams: true});


router
    .route('/')
    .get(getUserById)
    .put(putUserById)
    .delete(deleteUserById);

export default router;