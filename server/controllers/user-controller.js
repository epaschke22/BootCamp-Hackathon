import User from "../models/user.js";
import dataCleaner from "../utilities/data-cleaner.js";

const UserController = {
  // GET /api/users/
  getAllUsers: function (req, res) {
    User.find({}, "", function (err, users) {
      if (err || !users || users.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(dataCleaner.cleanUsers(users));
      }
    });
  },

  // GET /api/users/:user_id
  getUserByID: function (req, res) {
    User.findOne({ USER_ID: req.params.user_id }, "", function (err, user) {
      if (err || !user) {
        res.sendStatus(404);
      } else {
        res.status(200).send(dataCleaner.cleanUser(user));
      }
    });
  },

  // POST /api/users/
  postUser: function (req, res) {
    User.create({
      USER_NAME: req.body.name,
      MANAGER_ID: req.body.manager_id,
      IS_MANAGER: req.body.is_manager,
      PASSWORD: req.body.password,
      EMAIL: req.body.email,
    }).then(
      (c) => {
        res.location(`/api/Users/${c.USER_ID}`);
        res.sendStatus(201);
      }, // OK
      () => res.sendStatus(500) // Error
    );
  },

  // GET /api/users/byname/:user_name
  getUserByName: function (req, res) {
    User.findOne({ USER_NAME: req.params.user_name }, "", function (err, user) {
      if (err || !user) {
        res.sendStatus(404);
      } else {
        res.status(200).send(dataCleaner.cleanUser(user));
      }
    });
  },

  // DELETE /api/Users/:user_id
  deleteUserByID: function (req, res) {
    User.deleteOne({ USER_ID: req.params.user_id }, function (err) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  },
};

export default UserController;
