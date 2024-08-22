import { NextFunction, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import * as FormData from 'form-data';
import * as fs from 'fs';
import axios from 'axios';
import * as path from 'path';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MealRecipeService from '../services/MealRecipeService';
import MealCategoriesService from '../services/MealCategoriesService';
import ingredientColumnsList from './utils/ArrayIngredients';

dotenv.config();

export default class MealRecipeController {
  constructor(
    private mealCategoriesService = new MealCategoriesService(),
    private mealRecipeService = new MealRecipeService(),
  ) { }

  public async findByName(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query.q as string | undefined;
      if (query) {
        const { status, data } = await this.mealRecipeService.findByQuery({ strMeal: query });
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

  public async randomRecipe(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.mealRecipeService.randomRecipe();
      res.status(mapStatusHTTP(status)).json({ meals: data });
    } catch (error) {
      next(error);
    }
  }

  public async findByFirstNameLetter(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query.q as string | undefined;
      if (!query) return res.sendStatus(200);
      const { status, data } = await this.mealRecipeService.findByFirstNameLetter(query);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async findAllMealCategories(_req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.mealCategoriesService.findAll();
      res.status(mapStatusHTTP(status)).json({ meals: data });
    } catch (error) {
      next(error);
    }
  }

  public async findAllOnlyStrArea(_req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.mealRecipeService.findAllByColumn(['strArea']);
      res.status(mapStatusHTTP(status)).json({ meals: data });
    } catch (error) {
      next(error);
    }
  }

  public async findAllOnlyIngredients(_req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.mealRecipeService.findAllByColumn(ingredientColumnsList);
      console.log(data);

      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async findByIngredient(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query.q as string | undefined;
      if (!query) return res.sendStatus(200);
      const { status, data } = await this
        .mealRecipeService.findByColumnsAndQuery(query, ingredientColumnsList);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async findByCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query.q as string | undefined;
      if (!query) return res.sendStatus(200);
      const { status, data } = await this
        .mealRecipeService.findByColumnsAndQuery(query, ['strCategory']);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async findByArea(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query.q as string | undefined;
      if (!query) return res.sendStatus(200);
      const { status, data } = await this
        .mealRecipeService.findByColumnsAndQuery(query, ['strArea']);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }

  // eslint-disable-next-line class-methods-use-this, max-lines-per-function
  public async newRecipe(req: Request, res: Response, next: NextFunction) {
    try {
      if (!process.env.VITE_SPEECH_API) throw new Error('variable undefined!');
      if (!req.file) throw new Error('file required!');
      console.log(req.file);

      const stream = fs.createReadStream(req.file.path);
      const form = new FormData();
      form.append('file', stream);

      const { data } = await axios.post(
        'https://techhk.aoscdn.com/api/tasks/audio/recognition',
        form,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        { headers: { 'X-API-KEY': process.env.VITE_SPEECH_API } },
      );

      console.log(data);
    } catch (error) {
      next(error);
    }
  }
}
