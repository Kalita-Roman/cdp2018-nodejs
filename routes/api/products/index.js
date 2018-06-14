import { Router } from 'express';
import id from './id';
import { getProducts, postProducts } from 'middlewares/routes/products';

const router = new Router();

router
    .route('/')
    .get(getProducts)
    .post(postProducts);

router.use('/:id', id);

export default router;