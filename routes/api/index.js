import { Router } from 'express';
import users from './users';
import products from './products';
import verification from '../../middlewares/verification';

const router = new Router();
router.use(verification);
router.use('/users', users);
router.use('/products', products);

export default router;

