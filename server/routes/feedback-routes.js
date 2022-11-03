import express from "express";
var feedbackRouter = express.Router();
import feedbackController from "../controllers/feedback-controller.js";

// GET /api/feedback
feedbackRouter.get("/", function (req, res) {
  feedbackController.getAllFeedback(req, res);
});

// GET /api/feedback/:feedback_id
feedbackRouter.get("/:feedback_id", function (req, res) {
  feedbackController.getFeedbackByID(req, res);
});

// POST /api/feedback
feedbackRouter.post("/", function (req, res) {
  feedbackController.postFeedback(req, res);
});

// DELETE /api/feedback/:feedback_id
feedbackRouter.delete("/:feedback_id", function (req, res) {
  feedbackController.deleteFeedbackByID(req, res);
});

export default feedbackRouter;
