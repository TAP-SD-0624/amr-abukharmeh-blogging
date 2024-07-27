import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import Posts from './posts';
interface UsersInterface{
  id?:number,
  updatedAt?: Date;
  createdAt?: Date;
  user_name: string;
}
  class Users extends Model<UsersInterface> implements UsersInterface {
    public id!:number
    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
    public user_name!:string
    static associate() {
    }
  }

  Users.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_name: {
        type: DataTypes.STRING,
        validate:{
          isAlpha: true,
          isLowercase: true, 
          notEmpty: true,
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize :connection,
    modelName: 'Users',
  });
  export default Users