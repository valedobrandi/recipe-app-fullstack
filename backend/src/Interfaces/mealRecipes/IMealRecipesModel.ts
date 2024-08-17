import { IMealRecipes } from './IMealRecipes';

export interface IMealRecipesModel {
  findAll(): Promise<IMealRecipes[]>;
  findbyQuery(query: Record<string, string>):Promise<IMealRecipes[] | null>
  findById(idMeal: string): Promise<IMealRecipes | null>;
  findByFirstNameLetter(query: string): Promise<IMealRecipes[] | null>;
}
