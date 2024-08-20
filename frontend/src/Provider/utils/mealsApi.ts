export const APIHTTP = import.meta.env.VITE_MEAL_API || ''

export const MEALS_CATEGORIES_API =`${APIHTTP}/meals/categories`;
export const MEALS_BY_CATEGORIES_API =`${APIHTTP}/meals/category?q=`;
export const MEALS_NAME_API =`${APIHTTP}/meals/name?q=`;
export const MEALS_INGREDIENT_API = `${APIHTTP}/meals/ingredient?q=`;
export const MEALS_RANDOM_API = `${APIHTTP}/meals/random`;
export const MEALS_BY_ID_API = `${APIHTTP}/meals/`;