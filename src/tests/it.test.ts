import request from "supertest";
import { server, app, shutdown } from "../server";
import Users from "../database/models/users";
import Posts from "../database/models/posts";
import Categories from "../database/models/categories";
import Comments from "../database/models/comments";
afterAll(async () => {
  // await
  shutdown();
});
describe("User Testing", () => {
  /////no Name//////
  it("creating user with no Name", async () => {
    const resp = await request(app)
      .post("/createUser")
      .set({ "Content-type": "Application/json" })
      .send({ userName: "" });
    expect(resp.status).toEqual(400);
  });
  /////unacceptable name/////
  it("creating user with Bad Name", async () => {
    const resp = await request(app)
      .post("/createUser")
      .set({ "Content-type": "Application/json" })
      .send({ userName: "123@adwd" });
    expect(resp.status).toEqual(400);
  });
  /////// ok ///////
  it("creating regular user", async () => {
    const resp = await request(app)
      .post("/createUser")
      .set({ "Content-type": "Application/json" })
      .send({ userName: "testName" });
    expect(resp.status).toEqual(200);
  });
  /////// testing get all users /////
  it("shuld return all users", async () => {
    const resp = await request(app).get("/getAllUsers");
    expect(resp.status).toEqual(200);
  });
  /// get user by id ////
  it("should user by id", async () => {
    const resp = await request(app).get("/getUserById").query({ id: 1 });
    expect(resp.status).toEqual(200);
    expect(resp.body.user_name).toBe("testname");
  });
  /// get user by bad id ////
  it("should return 400 for bad id", async () => {
    const resp = await request(app).get("/getUserById").query({ id: -1 });
    expect(resp.status).toEqual(400);
  });
  /// update user name ///
  it("should return 200 for new name", async () => {
    const resp = await request(app)
      .put("/updateUserById")
      .set({ "Content-type": "Application/json" })
      .send({ id: 1, newName: "newnametesting" });
    expect(resp.status).toEqual(200);
  });
  /////// checking new name ////
  it("should return 200 for new name", async () => {
    const resp = await request(app).get("/getUserById").query({ id: 1 });
    expect(resp.status).toEqual(200);
    expect(resp.body.user_name).toBe("newnametesting");
  });
  it("should return 200 for deleting user", async () => {
    const resp = await request(app).delete("/deleteUserById").send({ id: 1 });
    expect(resp.status).toEqual(200);
  });
  afterAll(async () => {
    await Users.sync({ force: true });
  });
});

describe("testing Posts", () => {
  // first creating user and category cuz a post cant live on its own
  /////Creating new post /////
  // it("should return 200 creating new post", async () => {
  //   const resp = await request(app)
  //     .post("/createNewPost")
  //     .set({ "Content-type": "Application/json" })
  //     .send({ categoryIds: [], userId : , postText:''});
  // });
});
