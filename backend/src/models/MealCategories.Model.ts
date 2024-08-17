import { IMealCategories } from '../Interfaces/mealCategories/IMealCategories';
import { IMealCategoriesModel } from '../Interfaces/mealCategories/IMealCategoriesModel';
import SequelizeMealCategories from '../database/models/SequelizeMealCategories';

export default class MealCategoriesModel implements IMealCategoriesModel {
  private model = SequelizeMealCategories;

  public async findAll(): Promise<Array<IMealCategories>> {
    const dbReturn = await this.model.findAll();
    return dbReturn;
  }
}
