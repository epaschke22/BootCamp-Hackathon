import Feedback from "../models/feedback.js";
import dataCleaner from "../utilities/data-cleaner.js";

const feedbackController = {
  // GET /api/feedbacks/
  getAllFeedback: function (req, res) {
    Feedback.find({}, "", function (err, feedback) {
      if (err || !feedback || feedback.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(dataCleaner.cleanAllFeedback(feedback));
      }
    });
  },

  // GET /api/feedbacks/:feedback_id
  getFeedbackByID: function (req, res) {
    Feedback.findOne(
      { FEEDBACK_ID: req.params.feedback_id },
      "",
      function (err, feedback) {
        if (err || !feedback) {
          res.sendStatus(404);
        } else {
          res.status(200).send(dataCleaner.cleanFeedback(feedback));
        }
      }
    );
  },

  // POST /api/feedbacks/
  postFeedback: function (req, res) {
    Feedback.create({
      MANAGER_ID: req.body.manager_id,
      BODY_TEXT: req.body.body_text,
      REPLY_TEXT: req.body.reply_text,
    }).then(
      (c) => {
        res.location(`/api/feedbacks/${c.FEEDBACK_ID}`);
        res.sendStatus(201);
      }, // OK
      () => res.sendStatus(500) // Error
    );
  },

  // DELETE /api/feedbacks/:feedback_id
  deleteFeedbackByID: function (req, res) {
    Feedback.deleteOne({ FEEDBACK_ID: req.params.feedback_id }, function (err) {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  },
};

export default feedbackController;
