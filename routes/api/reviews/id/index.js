import { Router } from 'express';
import { 
    getReviewById,
    putReviewById,
    deleteReviewById
} from 'middlewares/routes/reviews';

const router =  new Router({mergeParams: true});


router
    .route('/')
    .get(getReviewById)
    .put(putReviewById)
    .delete(deleteReviewById);

export default router;