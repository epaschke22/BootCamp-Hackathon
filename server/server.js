import init_db from "./utilities/initialize.js";
import express from "express";
import accountRouter from "./routes/account-routes.js";
import userRouter from "./routes/user-routes.js";
import feedbackRouter from "./routes/feedback-routes.js";

init_db();

var app = express();
app.use(express.json());

app.use("/api/accounts", accountRouter);
app.use("/api/users", userRouter);
app.use("/api/feedback", feedbackRouter);

app.listen("8000");

console.log("server started");
