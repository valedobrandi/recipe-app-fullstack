/* eslint-disable max-lines */
import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeMealRecipes extends Model<InferAttributes<SequelizeMealRecipes>,
InferCreationAttributes<SequelizeMealRecipes>> {
  declare idMeal: number;
  declare strMeal: string;
  declare strMealThumb: string;
  declare strCategory: string;
  declare strArea: string;
  declare strYoutube: string;
  declare strInstructions: string;
  declare strIngredient1: string;
  declare strIngredient2: string;
  declare strIngredient3: string;
  declare strIngredient4: string;
  declare strIngredient5: string;
  declare strIngredient6: string;
  declare strIngredient7: string;
  declare strIngredient8: string;
  declare strIngredient9: string;
  declare strIngredient10: string;
  declare strIngredient11: string;
  declare strIngredient12: string;
  declare strIngredient13: string;
  declare strIngredient14: string;
  declare strIngredient15: string;
  declare strIngredient16: string;
  declare strIngredient17: string;
  declare strIngredient18: string;
  declare strIngredient19: string;
  declare strIngredient20: string;;
  declare strMeasure1: string;
  declare strMeasure2: string;
  declare strMeasure3: string;
  declare strMeasure4: string;
  declare strMeasure5: string;
  declare strMeasure6: string;
  declare strMeasure7: string;
  declare strMeasure8: string;
  declare strMeasure9: string;
  declare strMeasure10: string;
  declare strMeasure11: string;
  declare strMeasure12: string;
  declare strMeasure13: string;
  declare strMeasure14: string;
  declare strMeasure15: string;
  declare strMeasure16: string;
  declare strMeasure17: string;
  declare strMeasure18: string;
  declare strMeasure19: string;
  declare strMeasure20: string;
}

SequelizeMealRecipes.init({
  idMeal: {
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
    type: DataTypes.STRING(50),
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
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  strInstructions: {
    type: DataTypes.STRING(50),
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
}, {
  sequelize: db,
  modelName: 'mealRecipes',
  timestamps: false,
});

export default SequelizeMealRecipes;
