import MealRecipeModel from '../models/MealRecipeModel';
import { IMealRecipesModel } from '../Interfaces/mealRecipes/IMealRecipesModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IMealRecipes } from '../Interfaces/mealRecipes/IMealRecipes';
import SequelizeMealRecipes from '../database/models/SequelizeMealRecipes';

const NOT_FOUND = 'Receita não encontrada!';

export default class MealRecipeService {
  constructor(private mealRecipeModel: IMealRecipesModel = new MealRecipeModel()) {}

  public async findAll(): Promise<ServiceResponse<IMealRecipes[]>> {
    const mealRecipes = await this.mealRecipeModel.findAll();
    return { status: 'SUCCESSFUL', data: mealRecipes };
  }

  public async findById(idMeal: string): Promise<ServiceResponse<{ meals: IMealRecipes[] }>> {
    const mealRecipe = await this.mealRecipeModel.findById(idMeal);
    if (!mealRecipe) return { status: 'NOT_FOUND', data: { message: NOT_FOUND } };
    return { status: 'SUCCESSFUL', data: { meals: [mealRecipe] } };
  }

  public async findByQuery(query: Record<string, string>):
  Promise<ServiceResponse<{ meals: IMealRecipes[] }>> {
    const mealsRecipe = await this.mealRecipeModel.findbyQuery(query);
    if (!mealsRecipe) return { status: 'NOT_FOUND', data: { message: NOT_FOUND } };
    return { status: 'SUCCESSFUL', data: { meals: mealsRecipe } };
  }

  public async findByFirstNameLetter(query: string):
  Promise<ServiceResponse<{ meals: IMealRecipes[] }>> {
    const mealRecipe = await this.mealRecipeModel.findByFirstNameLetter(query);
    if (!mealRecipe) return { status: 'NOT_FOUND', data: { message: NOT_FOUND } };
    return { status: 'SUCCESSFUL', data: { meals: mealRecipe } };
  }

  public async randomRecipe(): Promise<ServiceResponse<IMealRecipes[]>> {
    const mealRecipes = await this.mealRecipeModel.findAll();
    const tableLenght = mealRecipes.length;
    const index = Math.floor(Math.random() * tableLenght);
    return { status: 'SUCCESSFUL', data: [mealRecipes[index]] };
  }

  public async findAllStrArea(): Promise<ServiceResponse<Array<{ strArea: string }>>> {
    const mealRecipes = await this.mealRecipeModel.findAll();
    const mapStrArea = mealRecipes.map(({ strArea }) => ({ strArea }));

    return { status: 'SUCCESSFUL', data: mapStrArea };
  }

  public async findAllByColumn(attributes: string[]): Promise<ServiceResponse<string[]>> {
    const meal = await this.mealRecipeModel.findAllByColumn(attributes) as SequelizeMealRecipes[];
    const set = new Set<string>();

    meal.forEach((ingredient) => {
      if ('dataValues' in ingredient) {
        const values = Object.values(ingredient.dataValues);
        values.forEach((value) => { if (value !== '') set.add(value as string); });
      }
    });

    return { status: 'SUCCESSFUL', data: Array.from(set) };
  }

  public async findByColumnsAndQuery(query: string, columnsList: Array<string>):
  Promise<ServiceResponse<{ meals: IMealRecipes[] }>> {
    const mealRecipe = await this.mealRecipeModel.findByColumnsAndQuery(query, columnsList);
    if (!mealRecipe) return { status: 'NOT_FOUND', data: { message: NOT_FOUND } };
    return { status: 'SUCCESSFUL', data: { meals: mealRecipe } };
  }
}
