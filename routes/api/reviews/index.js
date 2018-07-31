import { Router } from 'express';
import id from './id';
import { getReviews, postReview } from 'middlewares/routes/reviews';

const router = new Router();

router
    .route('/')
    .get(getReviews)
    .post(postReview);

router.use('/:id', id);

export default router;
    