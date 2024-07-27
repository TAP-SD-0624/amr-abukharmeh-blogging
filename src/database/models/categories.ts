import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import Posts from './posts';
import PostsCategories from './postscategories';
interface CategoriesAttributes {
  id?: number;
  category_name:string
  updatedAt?: Date;
  createdAt?: Date;
  cate?:Array<{}>
}
  class Categories extends Model<CategoriesAttributes> implements CategoriesAttributes{
    public id!: number;
    public category_name!:string;
    public readonly updatedAt!: Date;
    public readonly createdAt!: Date;
    static associate() {
      Categories.belongsToMany(Posts,{foreignKey: 'category_id',through:PostsCategories})
      Categories.hasMany(PostsCategories, { as: 'cate', foreignKey: 'category_id'} );
    }
  }
  Categories.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    category_name: {
      type: DataTypes.STRING
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
    modelName: 'Categories',
  });
  export default Categories;