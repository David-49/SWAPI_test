import filmRoutes from "./filmRoutes.js";
import transportRoutes from "./transportRoutes.js";
import peopleRoutes from "./peopleRoutes.js";
import vehicleRoutes from "./vehicleRoutes.js";
import starshipRoutes from "./starshipRoutes.js";
import specieRoutes from "./specieRoutes.js";
import planetRoutes from "./planetRoutes.js";

const routes = (app) => {

  // films
  app.use('/films', filmRoutes);

  // people
  app.use('/peoples', peopleRoutes);

  // planets
  app.use('/planets', planetRoutes);

  // species
  app.use("/species", specieRoutes);

  // starships
  app.use("/starships", starshipRoutes);

  // transport
  app.use('/transports', transportRoutes);

  // vehicles
  app.use("/vehicles", vehicleRoutes);
};

export default routes;
