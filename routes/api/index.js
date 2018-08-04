import { Router } from 'express';
import users from './users';
import products from './products';
import cities from './cities';
import reviews from './reviews';

const router = new Router();
router.use('/users', users);
router.use('/products', products);
router.use('/reviews', reviews);
router.use('/cities', cities);

export default router;

