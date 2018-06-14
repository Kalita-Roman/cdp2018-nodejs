import { Router } from 'express';
import { getReviewsById } from 'middlewares/routes/products';

const router = new Router({mergeParams: true});

router.get('/', getReviewsById);

export default router;
