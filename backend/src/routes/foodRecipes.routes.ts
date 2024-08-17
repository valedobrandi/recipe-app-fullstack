import { NextFunction, Request, Response, Router } from 'express';
import MealRecipeController from '../controllers/MealRecipeController';

const foodRecipeController = new MealRecipeController();
const router = Router();

router.get(
  '/name',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => foodRecipeController.findByName(req, res, next),
);

router.get(
  '/letter',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => foodRecipeController.findByFirstNameLetter(req, res, next),
);

router.get(
  '/random',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => foodRecipeController.countRow(req, res, next),
);

router.get(
  '/:id',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => foodRecipeController.findById(req, res, next),
);

export default router;
