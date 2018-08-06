import { Router } from 'express';
import { 
    putCityById,
    deleteCityById
} from 'middlewares/routes/cities';

const router =  new Router({mergeParams: true});

router
    .route('/')
    .put(putCityById)
    .delete(deleteCityById);

export default router;
