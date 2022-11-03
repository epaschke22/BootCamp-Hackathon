import mongoose from "mongoose";
import User from "../models/user.js";
import Feedback from "../models/feedback.js";

function dropCollections() {
  User.collection.drop().then(
    () => console.log("dropped User collection"),
    () => console.log("no User collection")
  );
  Feedback.collection.drop().then(
    () => console.log("dropped Feedback collection"),
    () => console.log("no Feedback collection")
  );
}

function populateCollections() {
  // This code resets the counter for each collection and creates a few dummy documents
  // Because these methods are asynchronous, the 'then' clauses are changed so they execute
  // in order. This is necessary because the id fields are generated and if the create
  // (insert) methods were invoked asynchronously the ids would not be deterministic.
  //
  // A more elegant (and complicated solution) would have been to use an array of functions
  // and map/reduce

  User.counterReset("USER_ID", () => {
    User.create({
      USER_NAME: "John",
      MANAGER_ID: 5,
      IS_MANAGER: false,
      PASSWORD: "heyjude",
      EMAIL: "john@fabfour.com",
    })
      .then(() =>
        User.create({
          USER_NAME: "Paul",
          MANAGER_ID: 5,
          IS_MANAGER: false,
          PASSWORD: "heyjude",
          EMAIL: "paul@fabfour.com",
        })
      )
      .then(() =>
        User.create({
          USER_NAME: "George",
          MANAGER_ID: 6,
          IS_MANAGER: false,
          PASSWORD: "heyjude",
          EMAIL: "george@fabfour.com",
        })
      )
      .then(() =>
        User.create({
          USER_NAME: "Ringo",
          MANAGER_ID: 6,
          IS_MANAGER: false,
          PASSWORD: "heyjude",
          EMAIL: "ringo@fabfour.com",
        })
      )
      .then(() =>
        User.create({
          USER_NAME: "Boss1",
          MANAGER_ID: 7,
          IS_MANAGER: true,
          PASSWORD: "blingbling",
          EMAIL: "boss1@companyx.com",
        })
      )
      .then(() =>
        User.create({
          USER_NAME: "Boss2",
          MANAGER_ID: 7,
          IS_MANAGER: true,
          PASSWORD: "kaching",
          EMAIL: "boss2@companyx.com",
        })
      )
      .then(() =>
        User.create({
          USER_NAME: "Overlord",
          MANAGER_ID: 999,
          IS_MANAGER: true,
          PASSWORD: "foobar",
          EMAIL: "foo@bar.com",
        })
      );
  });

  Feedback.counterReset("FEEDBACK_ID", () => {
    Feedback.create({
      MANAGER_ID: 100,
      BODY_TEXT: "We need more donuts in the break room",
      REPLY_TEXT: "",
    })
      .then(() =>
        Feedback.create({
          MANAGER_ID: 100,
          BODY_TEXT: "I think we should use Cobalt instead of java",
          REPLY_TEXT: "",
        })
      )
      .then(() =>
        Feedback.create({
          MANAGER_ID: 100,
          BODY_TEXT: "Maybe we could try using notepad instead of vscode?",
          REPLY_TEXT: "",
        })
      );
  });
}

export default function init_db() {
  mongoose.connect("mongodb://127.0.0.1:27017/project");

  dropCollections();
  populateCollections();
}
