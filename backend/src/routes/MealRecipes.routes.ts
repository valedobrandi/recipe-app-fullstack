import { NextFunction, Request, Response, Router } from 'express';
import upload from '../multer';
import MealRecipeController from '../controllers/MealRecipeController';

const mealRecipeController = new MealRecipeController();

const router = Router();

router.post(
  '/uploads/audio',
  upload.single('file'),
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.newRecipe(req, res, next),
);

router.get(
  '/category',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.findByCategory(req, res, next),
);

router.get(
  '/ingredients',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.findAllOnlyIngredients(req, res, next),
);

router.get(
  '/ingredient',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.findByIngredient(req, res, next),
);

router.get(
  '/areas',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.findAllOnlyStrArea(req, res, next),
);

router.get(
  '/area',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.findByArea(req, res, next),
);

router.get(
  '/categories',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => mealRecipeController.findAllMealCategories(req, res, next),
);

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

export default router;
