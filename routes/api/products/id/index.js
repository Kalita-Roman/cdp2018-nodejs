import { Router } from 'express';
import reviews from './reviews';
import {
    getProductById,
    putProductById,
    deleteProductById
} from 'middlewares/routes/products';

const router =  new Router({mergeParams: true});

router
    .route('/')
    .get(getProductById)
    .put(putProductById)
    .delete(deleteProductById);

router.use('/reviews', reviews);

export default router;