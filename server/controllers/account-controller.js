import User from "../models/user.js";
import dataCleaner from "../utilities/data-cleaner.js";

const accountController = {
  login: function (req, res) {
    User.findOne(
      { USER_NAME: req.body.username, PASSWORD: req.body.password },
      "",
      function (err, user) {
        if (err || !user) {
          res.sendStatus(401); // Unauthorized
        } else {
          res.setHeader("Content-Type", "application/json");
          res.send(JSON.stringify(dataCleaner.cleanUser(user)));
          // res.sendStatus(200); // OK
        }
      }
    );
  },

  register: function (req, res) {
    User.create({
      USER_NAME: req.body.name,
      PASSWORD: req.body.password,
      EMAIL: req.body.email,
    }).then(
      () => res.sendStatus(201), // OK
      () => res.sendStatus(500) // OK
    );
  },
};

export default accountController;
