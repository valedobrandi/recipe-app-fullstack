import MealRecipeModel from '../models/MealRecipeModel';
import { IMealRecipesModel } from '../Interfaces/mealRecipes/IMealRecipesModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IMealRecipes } from '../Interfaces/mealRecipes/IMealRecipes';

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

  public async countRow(): Promise<ServiceResponse<IMealRecipes[]>> {
    const mealRecipes = await this.mealRecipeModel.findAll();
    const tableLenght = mealRecipes.length;
    const index = Math.floor(Math.random() * tableLenght) + 1;
    return { status: 'SUCCESSFUL', data: [mealRecipes[index]] };
  }
}
