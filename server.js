import "./loadEnv.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/routes.js";
import "./database.js";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const port = 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Docs",
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./swagger/*.yaml"],
};

const specs = swaggerJSDoc(options);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routes(app, specs);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
