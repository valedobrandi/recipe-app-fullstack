import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IUsers } from '../../Interfaces/users/IUsers';
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
          category: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('mealCategories');
  },
};