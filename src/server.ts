import express from "express";
import { Request, Response, Express } from "express";
import { createServer } from "http";
import cors from "cors";
import Users from "./database/models/users";
import Posts from "./database/models/posts";
import Categories from "./database/models/categories";
import Comments from "./database/models/comments";
import sequelizeConnection from "./database/connection";
import {
  createCategoryPost,
  createCommentPost,
  createNewPost,
  createNewUser,
  deletePostById,
  deleteUserById,
  getAllPosts,
  getAllUsers,
  getPostById,
  getPostCategories,
  getPostComments,
  getUserById,
  updatePostById,
  updateUserById,
} from "./controlers/database";

export const app = express();
app.use(express.json());
app.use(cors());
export const server = createServer(app);
Categories.associate();
Posts.associate();
Users.associate();
Comments.associate();
sequelizeConnection.sync({ alter: true });
export const clearAll = async () => {
  await sequelizeConnection.sync({ force: true });
};
export const shutdown = () => {
  server.close();
};

////////////////////////////////////////////////////////////////////////////////////////////
// create new user
/// user name can be just letters
/// user name cant be empty
app.post(
  "/createUser",
  async (req: Request, res: Response): Promise<Response> => {
    return await createNewUser(req, res);
  }
);
// get all users
app.get(
  "/getAllUsers",
  async (req: Request, res: Response): Promise<Response> => {
    return await getAllUsers(req, res);
  }
);
// get user by Id
app.get(
  "/getUserById",
  async (req: Request, res: Response): Promise<Response> => {
    return await getUserById(req, res);
  }
);
//update user name By ID
app.put(
  "/updateUserById",
  async (req: Request, res: Response): Promise<Response> => {
    return await updateUserById(req, res);
  }
);
//delete user By ID
app.delete(
  "/deleteUserById",
  async (req: Request, res: Response): Promise<Response> => {
    return await deleteUserById(req, res);
  }
);
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////POSTS///////////////////////////////////////////////////

app.post(
  "/createNewPost",
  async (req: Request, res: Response): Promise<Response> => {
    return await createNewPost(req, res);
  }
);
// Get all posts with associated users, categories, and comments
app.get(
  "/getAllposts",
  async (req: Request, res: Response): Promise<Response> => {
    return getAllPosts(req, res);
  }
);
app.get(
  "/getPostById",
  async (req: Request, res: Response): Promise<Response> => {
    return getPostById(req, res);
  }
);

app.put(
  "/updatePostById",
  async (req: Request, res: Response): Promise<Response> => {
    return updatePostById(req, res);
  }
);

app.delete(
  "/deletePostById",
  async (req: Request, res: Response): Promise<Response> => {
    return deletePostById(req, res);
  }
);
app.post(
  "/createCategoryPost",
  async (req: Request, res: Response): Promise<Response> => {
    return await createCategoryPost(req, res);
  }
);
app.get(
  "/getPostCategories",
  async (req: Request, res: Response): Promise<Response> => {
    return getPostCategories(req, res);
  }
);
app.post(
  "/createCommentPost",
  async (req: Request, res: Response): Promise<Response> => {
    return await createCommentPost(req, res);
  }
);
app.get(
  "/getPostComments",
  async (req: Request, res: Response): Promise<Response> => {
    return getPostComments(req, res);
  }
);

sequelizeConnection
  .authenticate()
  .then(() => console.log("connected to the database"))
  .catch(() => console.log("couldnt connect to the database"));
server.listen(3000);
console.log("server is listening at port 3000");
