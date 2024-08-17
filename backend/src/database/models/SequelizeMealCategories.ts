import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeCategories extends Model<InferAttributes<SequelizeCategories>,
InferCreationAttributes<SequelizeCategories>> {
  declare id: CreationOptional<number>;

  declare category: string;
}

SequelizeCategories.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'mealCategories',
  timestamps: false,
  underscored: true,
});

export default SequelizeCategories;
