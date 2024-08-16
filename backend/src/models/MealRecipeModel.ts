import { IMealRecipesModel } from '../Interfaces/mealRecipes/IMealRecipesModel';
import { IMealRecipes } from '../Interfaces/mealRecipes/IMealRecipes';
import SequelizeMealRecipes from '../database/models/SequelizeMealRecipes';

export default class MealRecipeModel implements IMealRecipesModel {
  private model = SequelizeMealRecipes;

  public async findAll(): Promise<IMealRecipes[]> {
    const dbData = await this.model.findAll();
    return dbData;
  }

  public async findById(idMeal: string): Promise<IMealRecipes | null> {
    const dbData = await this.model.findByPk(idMeal);
    if (!dbData) return null;
    return dbData.dataValues;
  }
}
