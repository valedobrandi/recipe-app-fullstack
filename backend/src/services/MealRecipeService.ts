import MealRecipeModel from '../models/MealRecipeModel';
import { IMealRecipesModel } from '../Interfaces/mealRecipes/IMealRecipesModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IMealRecipes } from '../Interfaces/mealRecipes/IMealRecipes';

export default class MealRecipeService {
  constructor(private mealRecipeModel: IMealRecipesModel = new MealRecipeModel()) {}

  public async findAll(): Promise<ServiceResponse<IMealRecipes[]>> {
    const mealRecipes = await this.mealRecipeModel.findAll();
    return { status: 'SUCCESSFUL', data: mealRecipes };
  }

  public async findById(idMeal: string): Promise<ServiceResponse<{ meals: IMealRecipes[] }>> {
    const mealRecipe = await this.mealRecipeModel.findById(idMeal);
    if (!mealRecipe) return { status: 'NOT_FOUND', data: { message: 'Receita não encontrada!' } };
    return { status: 'SUCCESSFUL', data: { meals: [mealRecipe] } };
  }
}
