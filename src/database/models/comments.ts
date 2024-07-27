import { Model, DataTypes } from 'sequelize';
import connection from '../connection';
import Users from './users';
interface CommentsInterface {
  id?:number,
  comment_text: any,
  user_id: number,
  post_id: any
  updatedAt?: Date;
  createdAt?: Date;
}

  class Comments extends Model<CommentsInterface> implements CommentsInterface {
    public id?:number;
    public comment_text!: string;
    public user_id!: number;
    public post_id!: number;
    public readonly updatedAt?: Date;
    public readonly createdAt?: Date;
    static associate() {
      Comments.belongsTo(Users,{foreignKey: {name: 'user_id'}})
    }
  }
  Comments.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    comment_text: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    post_id: {
      type: DataTypes.INTEGER,
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
    modelName: 'Comments',
  });

  export default Comments;
