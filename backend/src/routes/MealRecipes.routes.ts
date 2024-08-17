import { NextFunction, Request, Response, Router } from 'express';
import MealRecipeController from '../controllers/MealRecipeController';

const mealRecipeController = new MealRecipeController();
const router = Router();

router.get(
  '/name',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.findByName(req, res, next),
);

router.get(
  '/letter',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.findByFirstNameLetter(req, res, next),
);

router.get(
  '/random',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.randomRecipe(req, res, next),
);

router.get(
  '/:id',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.findById(req, res, next),
);

router.get(
  '/categories',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.findAllMealCategories(req, res, next),
);

export default router;
