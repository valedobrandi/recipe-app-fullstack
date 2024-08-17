import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';
import db from '.';

class SequelizeCategories extends Model<InferAttributes<SequelizeCategories>,
InferCreationAttributes<SequelizeCategories>> {
  declare id: number;

  declare strCategory: string;
}

SequelizeCategories.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strCategory: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'mealCategories',
  timestamps: false,
});

export default SequelizeCategories;
