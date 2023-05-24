import "./loadEnv.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/routes.js";
import "./database.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

app.listen(port, () => {
  console.log(`App running on http://localhost:${3000}`);
});
