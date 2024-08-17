
import { QueryInterface } from 'sequelize';



export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('mealCategories', [
      { strCategory: "Beef" },
      { strCategory: "Breakfast" },
      { strCategory: "Chicken" },
      { strCategory: "Dessert" },
      { strCategory: "Goat" },
      { strCategory: "Lamb" },
      { strCategory: "Miscellaneous" },
      { strCategory: "Pasta" },
      { strCategory: "Pork" },
      { strCategory: "Seafood" },
      { strCategory: "Side" },
      { strCategory: "Starter" },
      { strCategory: "Vegan" },
      { strCategory: "Vegetarian" },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('mealCategories', {});
  },
}
