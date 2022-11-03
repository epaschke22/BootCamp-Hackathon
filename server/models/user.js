import mongoose from "mongoose";
import s from "mongoose-sequence";
const sequence = s(mongoose);

const { Schema, model } = mongoose;

const userSchema = new Schema({
  USER_ID: Number,
  USER_NAME: String,
  MANAGER_ID: Number,
  IS_MANAGER: Boolean,
  PASSWORD: String,
  EMAIL: String,
});

userSchema.plugin(sequence, { inc_field: "USER_ID" });

const User = model("User", userSchema);
export default User;
