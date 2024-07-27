import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import Users from './users';
import Categories from './categories';
import PostsCategories from './postscategories';
import Comments from './comments';
interface PostsInterface{
  id?:number,
  updatedAt?: Date;
  createdAt?: Date;
  post_text:string;
  user_id:number;
  tags?:Array<{}>
}
  class Posts extends Model<PostsInterface> implements PostsInterface  {
    public id?:number;
    public post_text!: string;
    public user_id!: number;
    public readonly updatedAt?: Date;
    public readonly createdAt?: Date;
    static associate() {
      Posts.belongsToMany(Categories,{foreignKey: 'post_id',through:PostsCategories, as:'categories'})
      Posts.hasMany(Comments,{foreignKey: {name: 'post_id',}})
      Posts.belongsTo(Users,{foreignKey: {name: 'user_id',}})
      Posts.hasMany(PostsCategories, { as: 'tags', foreignKey: 'post_id'} );
    }

  }
  Posts.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    post_text: {
      type: DataTypes.STRING
    },
    user_id: {
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
    modelName: 'Post',
  });

  export default Posts