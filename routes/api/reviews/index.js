import { Router } from 'express';
import id from './id';
import { getReviews, postReviews } from 'middlewares/routes/reviews';

const router = new Router();

router
    .route('/')
    .get(getReviews)
    .post(postReviews);

router.use('/:id', id);

export default router;
    