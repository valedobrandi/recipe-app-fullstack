import { ServiceResponse } from '../Interfaces/ServiceResponse';
import MealCategories from '../models/MealCategories.Model';
import { IMealCategories } from '../Interfaces/mealCategories/IMealCategories';

export default class MealCategoriesService {
  constructor(private mealCategoriesModel = new MealCategories()) {}

  public async findAll(): Promise<ServiceResponse<IMealCategories[]>> {
    const categories = await this.mealCategoriesModel.findAll();
    return { status: 'SUCCESSFUL', data: categories };
  }
}
