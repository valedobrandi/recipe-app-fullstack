import { IMealRecipes } from './IMealRecipes';

export interface IMealRecipesModel {
  findAll(): Promise<IMealRecipes[]>;
  findById(idMeal: string): Promise<IMealRecipes | null>;
}
