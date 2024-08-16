import * as bcrypt from 'bcryptjs';
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('mealRecipes', [
      {
        strMeal: 'Wontons',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1525876468.jpg',
        strCategory: 'Pork',
        strArea: 'Chinese',
        strYoutube: 'https://www.youtube.com/watch?v=9h9No18ZyCI',
        strInstructions:'Combine pork, garlic, ginger, soy sauce, sesame oil, and vegetables in a bowl.\r\n' +
        'Separate wonton skins.\r\n' +
        'Place a heaping teaspoon of filling in the center of the wonton.\r\n' +
        'Brush water on 2 borders of the skin, covering 1/4 inch from the edge.\r\n' +
        'Fold skin over to form a triangle, sealing edges.\r\n' +
        'Pinch the two long outside points together.\r\n' +
        'Heat oil to 450 degrees and fry 4 to 5 at a time until golden.\r\n' +
        'Drain and serve with sauce.',
        strIngredient1: 'Pork',
        strIngredient2: 'Garlic Clove',  
        strIngredient3: 'Ginger',  
        strIngredient4: 'Soy Sauce',  
        strIngredient5: 'Sesame Seed Oil',  
        strIngredient6: 'Carrots',  
        strIngredient7: 'Celery',  
        strIngredient8: 'Spring Onions',  
        strIngredient9: 'Wonton Skin',  
        strIngredient10: 'Oil',  
        strIngredient11: 'Water',  
        strIngredient12: '',  
        strIngredient13: '',  
        strIngredient14: '',  
        strIngredient15: '',  
        strIngredient16: '',  
        strIngredient17: '',  
        strIngredient18: '',  
        strIngredient19: '',  
        strIngredient20: '',
        strMeasure1: '1lb',
        strMeasure2: '3 chopped',
        strMeasure3: '1 tsp ',  
        strMeasure4: '1 tbs',  
        strMeasure5: '1 tsp ',  
        strMeasure6: '3 finely chopped',  
        strMeasure7: '3 finely chopped',  
        strMeasure8: '6 chopped',  
        strMeasure9: '1 Packet',  
        strMeasure10: 'Fry',  
        strMeasure11: 'Bottle',  
        strMeasure12: '',  
        strMeasure13: '',  
        strMeasure14: '',  
        strMeasure15: '',  
        strMeasure16: '',  
        strMeasure17: '',  
        strMeasure18: '',  
        strMeasure19: '',  
        strMeasure20: '',
      },
      {
        strMeal: 'Poutine',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg',
        strCategory: 'Miscellaneous',
        strArea: 'Canadian',
        strYoutube: 'https://www.youtube.com/watch?v=UVAMAoA2_WU',
        strInstructions:'Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C).\r\n' +
        'Warm gravy in saucepan or microwave.\r\n '+
        'Place the fries into the hot oil, and cook until light brown, about 5 minutes.\r\n' +
        'Remove to a paper towel lined plate to drain.\r\n' +
        'Place the fries on a serving platter, and sprinkle the cheese over them.\r\n' +
        'Ladle gravy over the fries and cheese, and serve immediately.',
        strIngredient1: 'Vegetable Oil',
        strIngredient2: 'Beef Gravy',  
        strIngredient3: 'Potatoes',  
        strIngredient4: 'Cheese Curds',  
        strIngredient5: '',  
        strIngredient6: '',  
        strIngredient7: '',  
        strIngredient8: '',  
        strIngredient9: '',  
        strIngredient10: '',  
        strIngredient11: '',  
        strIngredient12: '',  
        strIngredient13: '',  
        strIngredient14: '',  
        strIngredient15: '',  
        strIngredient16: '',  
        strIngredient17: '',  
        strIngredient18: '',  
        strIngredient19: '',  
        strIngredient20: '',
        strMeasure1: 'Dash',
        strMeasure2: '1 Can',
        strMeasure3: '5 thin cut ',  
        strMeasure4: '2 cups',  
        strMeasure5: '',  
        strMeasure6: '',  
        strMeasure7: '',  
        strMeasure8: '',  
        strMeasure9: ' ',  
        strMeasure10: '',  
        strMeasure11: '',  
        strMeasure12: '',  
        strMeasure13: '',  
        strMeasure14: '',  
        strMeasure15: '',  
        strMeasure16: '',  
        strMeasure17: '',  
        strMeasure18: '',  
        strMeasure19: '',  
        strMeasure20: '',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('mealRecipes', {});
  },
}
