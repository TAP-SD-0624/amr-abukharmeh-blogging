import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
interface PostsCategoriesInterface {
  id?:number,
  createdAt?:number,
  updatedAt?:number,
  post_id:number,
  category_id:number
}
  class PostsCategories extends Model<PostsCategoriesInterface> implements PostsCategoriesInterface {
    public id?:number;
    public createdAt?:number;
    public updatedAt?:number;
    public post_id!:number;
    public category_id!:number;
  }
  PostsCategories.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull:true,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull:true,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
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
    sequelize : connection,
    modelName: 'PostsCategories',
  });
export default PostsCategories