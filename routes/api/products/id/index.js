import { Router } from 'express';
import reviews from './reviews';
import { getProductById } from 'middlewares/routes/products';

const router =  new Router({mergeParams: true});

router.get('/', getProductById);
router.use('/reviews', reviews);

export default router;