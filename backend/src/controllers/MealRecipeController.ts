import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MealRecipeService from '../services/MealRecipeService';

export default class MealRecipeController {
  constructor(private mealRecipeService = new MealRecipeService()) { }

  public async findByName(req: Request, res: Response, next: NextFunction) {
    try {
      const { q } = req.params;
      if (q) {
        const { status, data } = await this.mealRecipeService.findByQuery({ strMeal: q });
        return res.status(mapStatusHTTP(status)).json(data);
      }
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

  public async countRow(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.mealRecipeService.countRow();
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async findByFirstNameLetter(req: Request, res: Response, next: NextFunction) {
    try {
      const { q } = req.params;
      const { status, data } = await this.mealRecipeService.findByFirstNameLetter(q);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }
}
