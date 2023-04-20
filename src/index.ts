import Express from "express";
import cookieParser from "cookie-parser";

const app: Express.Application = Express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());

// import our routes

const justify = require("./routes/justify.route");
const token = require("./routes/auth.route");

// Use our routes

app.use("/api", justify, token);

// See if run dev works correctly

app.listen(port, () => {
  console.log(`Justify API is listening on port ${port}`);
});
