import { Router } from 'express';
import loginRouter from './login.routes';
import mealsRouter from './MealRecipes.routes';

const router = Router();

router.use('/login', loginRouter);
router.use('/meals', mealsRouter);

export default router;
