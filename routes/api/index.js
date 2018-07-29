import { Router } from 'express';
import users from './users';
import products from './products';
import cities from './cities';

const router = new Router();
router.use('/users', users);
router.use('/products', products);
router.use('/cities', cities);

export default router;

