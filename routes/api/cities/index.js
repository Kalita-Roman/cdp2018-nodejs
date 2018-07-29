import { Router } from 'express';
import id from './id';
import { 
    getCities,
    postCities
} from 'middlewares/routes/cities';

const router = new Router();

router
    .route('/')
    .get(getCities)
    .post(postCities);

router.use('/:id', id);

export default router;