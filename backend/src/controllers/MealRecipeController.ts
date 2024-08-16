import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MealRecipeService from '../services/MealRecipeService';

export default class MealRecipeController {
  constructor(private mealRecipeService = new MealRecipeService()) { }

  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.mealRecipeService.findAll();
      res.status(mapStatusHTTP(status)).json({ meals: data });
    } catch (error) {
      next(error);
    }
  }

  public async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { status, data } = await this.mealRecipeService.findById(id);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }
}
