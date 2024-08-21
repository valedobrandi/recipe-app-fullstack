import { NextFunction, Request, Response } from 'express';
import path = require('path');
import mapStatusHTTP from '../utils/mapStatusHTTP';
import MealRecipeService from '../services/MealRecipeService';
import MealCategoriesService from '../services/MealCategoriesService';
import ingredientColumnsList from './utils/ArrayIngredients';

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
      const filePath = path.resolve(__dirname, 'uploads', '1724255722427-recording.wav');
      const body = new FormData();
      body.append('file', filePath);
      
      
      let myHeaders = new Headers();
      myHeaders.append("X-API-KEY", "");
      const response = await fetch(
        'https://techhk.aoscdn.com/api/tasks/audio/recognition',
        {
          method: 'POST',
          headers: myHeaders,
          body
        },
      );
      const data = await response.json()
      console.log(data);
      
      
    } catch (error) {
      next(error)
    } 
    }
  }

      /*      console.log(req.file);
    
    const filePath = path.resolve(__dirname, 'uploads', req.file.filename);
    const body = new FormData() as any;
    body.append('file', filePath); */
    // formData.append('file', req.file.buffer, { filename: req.file.originalname, contentType: req.file.mimetype });
    // console.log(formData);
    /*       const body = new FormData();
    body.append('file', formData); */
    /*
    const headers = new Headers();
    headers.append('X-API-KEY', 'wxmrtqv60q4b2jjda');
    
    const requestOptions: RequestInit = {
      method: 'POST',
      headers,
      body,
        redirect: 'follow',
      }; */
  
  /*     const filePath = path.resolve(__dirname, 'uploads', req.file.filename);
  
  
      const body = new FormData() as any;
      body.append('file', filePath);
      const headers = new Headers();
  
      headers.append('X-API-KEY', 'wxmrtqv60q4b2jjda');
  
      const requestOptions: RequestInit = {
        method: 'POST',
        headers,
        body,
        redirect: 'follow'
      } */