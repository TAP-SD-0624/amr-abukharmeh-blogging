import { Request, Response, Express } from "express";
import Users from "../database/models/users";
import Posts from "../database/models/posts";
import Categories from "../database/models/categories";
import Comments from "../database/models/comments";
import PostsCategories from "../database/models/postscategories";

export async function createNewUser(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    let userName: string = req.body.userName;
    if (userName) {
      userName = userName.toLowerCase();
      await Users.create({ user_name: userName });
    } else {
      return res.status(400).send("Empty name");
    }
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
  return res.sendStatus(200);
}
export async function getAllUsers(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const users: {} = await Users.findAll({ attributes: ["user_name"] });
    return res.send(users);
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function getUserById(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    if (req.query.id && /^[0-9]*$/.test(req.query.id as string)) {
      const id: number = Number(req.query.id);
      const user = await Users.findByPk(id);
      if (user) {
        return res.send(user);
      } else {
        return res.status(400).send("not valid id");
      }
    } else {
      return res.status(400).send("Empty Id or not valid");
    }
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function updateUserById(
  req: Request,
  res: Response
): Promise<Response> {
  let { id, newName } = req.body;

  try {
    if (!(id && newName)) return res.status(400).send("missing info");
    newName = newName.toLowerCase();
    const user = await Users.update(
      { user_name: newName },
      { where: { id: id } }
    );
    if (user[0]) return res.send(200);
    return res.status(400).send("invalid id");
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function deleteUserById(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.body;
  if (!id) return res.status(400).send("invalid id");
  try {
    const result = await Users.destroy({ where: { id: id } });
    if (result) return res.send(200);
    return res.status(400).send("No such user");
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function createNewPost(
  req: Request,
  res: Response
): Promise<Response> {
  interface postParams {
    postText: string;
    userId: number;
    categoryIds: [];
  }
  const { postText, userId, categoryIds }: postParams = req.body;
  if (!(postText && userId && categoryIds.length > 0))
    return res.status(400).send("Missing info");
  const bulkCat: Array<{}> = categoryIds.map((i: number): {} => {
    return { category_id: i };
  });
  try {
    const a = await Posts.create(
      {
        post_text: postText,
        user_id: userId,
        tags: bulkCat,
      },
      {
        include: [
          {
            model: PostsCategories,
            as: "tags",
          },
        ],
      }
    );
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
  return res.send(200);
}
export async function getAllPosts(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const x = await Posts.findAll({
      attributes: [
        ["id", "Post Id"],
        ["post_text", "Post Text"],
      ],
      include: [
        { model: Users, attributes: [["user_name", "User Name"]] },
        {
          model: Categories,
          as: "categories",
          attributes: [["category_name", "Category Name"]],
          through: { attributes: [] },
        },
        { model: Comments, attributes: [["comment_text", "Comment"]] },
      ],
    });
    return res.send(x);
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function getPostById(
  req: Request,
  res: Response
): Promise<Response> {
  if (!(req.query.id && /^[0-9]*$/.test(req.query.id as string)))
    return res.status(400).send("Empty Id or not valid");
  try {
    const id: number = Number(req.query.id);
    const x = await Posts.findByPk(id, {
      attributes: [
        ["id", "Post Id"],
        ["post_text", "Post Text"],
      ],
      include: [
        { model: Users, attributes: [["user_name", "User Name"]] },
        {
          model: Categories,
          as: "categories",
          attributes: [["category_name", "Category Name"]],
          through: { attributes: [] },
        },
        { model: Comments, attributes: [["comment_text", "Comment"]] },
      ],
    });
    return res.send(x);
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function updatePostById(
  req: Request,
  res: Response
): Promise<Response> {
  let { id, newText } = req.body;
  if (!(id && newText))
    return res.status(400).send("Empty Id or not valid data");
  try {
    const x = await Posts.update({ post_text: newText }, { where: { id } });
    if (x[0]) return res.send(200);
    return res.status(400).send("invalid id");
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function deletePostById(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.body;
  if (!id) return res.status(400).send("invalid id");
  try {
    const result = await Posts.destroy({ where: { id: id } });
    if (result) return res.send(200);
    return res.status(400).send("No such Post");
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function createCategoryPost(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    let { newCategoryName, postId } = req.body;
    if (newCategoryName) {
      try {
        const a = await Categories.create(
          {
            category_name: newCategoryName,
            cate: [{ post_id: postId }],
          },
          {
            include: [
              {
                model: PostsCategories,
                as: "cate",
              },
            ],
          }
        );
      } catch (error) {
        return res.status(400).send("Opps somthing went wrong");
      }
      return res.send(200);
    } else {
      return res.status(400).send("Empty name");
    }
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function getPostCategories(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    if (req.query.id && /^[0-9]*$/.test(req.query.id as string)) {
      const id: number = Number(req.query.id);
      const user = await Posts.findByPk(id, {
        attributes: [],
        include: [
          {
            model: Categories,
            as: "categories",
            attributes: [["category_name", "Category Name"]],
            through: { attributes: [] },
          },
        ],
      });
      if (user) {
        return res.send(user);
      } else {
        return res.status(400).send("not valid id");
      }
    } else {
      return res.status(400).send("Empty Id or not valid");
    }
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function createCommentPost(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    let { newComment, postId, userId } = req.body;
    if (newComment && postId && userId) {
      try {
        const a = await Comments.create({
          comment_text: newComment,
          post_id: postId,
          user_id: userId,
        });
      } catch (error) {
        return res.status(400).send("Opps somthing went wrong");
      }
      return res.send(200);
    } else {
      return res.status(400).send("Empty name");
    }
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
export async function getPostComments(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    if (req.query.id && /^[0-9]*$/.test(req.query.id as string)) {
      const id: number = Number(req.query.id);
      const user = await Posts.findByPk(id, {
        attributes: [],
        include: [
          { model: Comments, attributes: [["comment_text", "Comment Text"]] },
        ],
      });
      if (user) {
        return res.send(user);
      } else {
        return res.status(400).send("not valid id");
      }
    } else {
      return res.status(400).send("Empty Id or not valid");
    }
  } catch (error) {
    return res.status(400).send("Opps somthing went wrong");
  }
}
