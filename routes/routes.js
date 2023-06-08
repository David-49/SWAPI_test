import filmRoutes from "./filmRoutes.js";
import transportRoutes from "./transportRoutes.js";
import peopleRoutes from "./peopleRoutes.js";
import vehicleRoutes from "./vehicleRoutes.js";
import starshipRoutes from "./starshipRoutes.js";
import specieRoutes from "./specieRoutes.js";
import planetRoutes from "./planetRoutes.js";
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes.js";
import authenticateToken from "../middleware/express/authenticateToken.js";
import isAdmin from "../middleware/express/isAdmin.js";
import swaggerUi from "swagger-ui-express";

const routes = (app, specs) => {
  app.use("/api", authenticateToken);

  // films
  app.use("/api/films", filmRoutes);

  // people
  app.use("/api/peoples", peopleRoutes);

  // planets
  app.use("/api/planets", planetRoutes);

  // species
  app.use("/api/species", specieRoutes);

  // starships
  app.use("/api/starships", starshipRoutes);

  // transport
  app.use("/api/transports", transportRoutes);

  // vehicles
  app.use("/api/vehicles", vehicleRoutes);

  // users
  app.use("/settings", isAdmin);
  app.use("/settings/users", userRoutes);

  // login
  app.use("/auth", authRoutes);

  // swagger doc
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export default routes;
