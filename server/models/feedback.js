import mongoose from "mongoose";
import s from "mongoose-sequence";
const sequence = s(mongoose);

const { Schema, model } = mongoose;

const feedbackSchema = new Schema({
  FEEDBACK_ID: Number,
  MANAGER_ID: Number,
  BODY_TEXT: String,
  REPLY_TEXT: String,
});

feedbackSchema.plugin(sequence, { inc_field: "FEEDBACK_ID" });

const Feedback = model("Feedback", feedbackSchema);
export default Feedback;
