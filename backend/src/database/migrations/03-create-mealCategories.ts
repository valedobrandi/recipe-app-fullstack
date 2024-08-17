import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IMealCategories } from '../../Interfaces/mealCategories/IMealCategories';
export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMealCategories>>('mealCategories', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          strCategory: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('mealCategories');
  },
};