
import { QueryInterface } from 'sequelize';



export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('mealCategories', [
      { category: "All" },
      { category: "Beef" },
      { category: "Breakfast" },
      { category: "Chicken" },
      { category: "Dessert" },
      { category: "Goat" },
      { category: "Lamb" },
      { category: "Miscellaneous" },
      { category: "Pasta" },
      { category: "Pork" },
      { category: "Seafood" },
      { category: "Side" },
      { category: "Starter" },
      { category: "Vegan" },
      { category: "Vegetarian" },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('mealCategories', {});
  },
}
