import { IMealCategories } from './IMealCategories';

export interface IMealCategoriesModel {
  findAll(): Promise<IMealCategories[]>;

}
