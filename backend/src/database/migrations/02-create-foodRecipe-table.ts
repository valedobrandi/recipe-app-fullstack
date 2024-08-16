import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IFoodRecipes } from '../../Interfaces/foodRecipes/IFoodRecipes';
export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IFoodRecipes>>('foodRecipes', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      strMeal: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMealThumb: {
        type: DataTypes.STRING(225),
        allowNull: false,
      },
      strCategory: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strArea: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strYoutube: {
        type: DataTypes.STRING(225),
        allowNull: false,
      },
      strInstructions: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      strIngredient1: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient2: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient3: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient4: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient5: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient6: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient7: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient8: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient9: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient10: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient11: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient12: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient13: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient14: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient15: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient16: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient17: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient18: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient19: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strIngredient20: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure1: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure2: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure3: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure4: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure5: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure6: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure7: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure8: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure9: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure10: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure11: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure12: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure13: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure14: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure15: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure16: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure17: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure18: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure19: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      strMeasure20: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('foodRecipes');
  },
};