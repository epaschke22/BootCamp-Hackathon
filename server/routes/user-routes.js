import express from "express";
var userRouter = express.Router();
import userController from "../controllers/user-controller.js";

// GET /api/users
userRouter.get("/", function (req, res) {
  userController.getAllUsers(req, res);
});

// GET /api/users/:user_id
userRouter.get("/:user_id", function (req, res) {
  userController.getUserByID(req, res);
});

// POST /api/users
userRouter.post("/", function (req, res) {
  userController.postUser(req, res);
});

// GET /api/users/byname/:user_name
userRouter.get("/byname/:user_name", function (req, res) {
  userController.getUserByName(req, res);
});

// DELETE /api/users/:user_id
userRouter.delete("/:user_id", function (req, res) {
  userController.deleteUserByID(req, res);
});

export default userRouter;
