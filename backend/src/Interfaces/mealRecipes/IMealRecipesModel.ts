import { IMealRecipes } from './IMealRecipes';

export interface IMealRecipesModel {
  findAll(): Promise<IMealRecipes[]>;
  findbyQuery(query: Record<string, string>):Promise<IMealRecipes[] | null>
  findById(idMeal: string): Promise<IMealRecipes | null>;
  findByFirstNameLetter(query: string): Promise<IMealRecipes[] | null>;
  findAllByColumn(attributes: string[]): Promise<IMealRecipes[]>;
  findByColumnsAndQuery(query: string, columnsList: Array<string>): Promise<IMealRecipes[] | null> ;
}
