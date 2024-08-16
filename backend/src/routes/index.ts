import { Router } from 'express';
import loginRouter from './login.routes';
import mealsRouter from './foodRecipes.routes';

const router = Router();

router.use('/login', loginRouter);
router.use('/meals', mealsRouter)

export default router;
