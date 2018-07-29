import { Router } from 'express';
//import id from './id';
import { getCities } from 'middlewares/routes/cities';

const router = new Router();

router
    .route('/')
    .get(getCities);
//.post(postProducts);

//router.use('/:id', id);

export default router;