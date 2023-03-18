import {
  createOneFilm,
  deleteOneFilm,
  getFilms,
  getOneFilm,
  updateOneFilm,
} from "../controllers/filmController.js";
import {
  getPeoples,
  getOnePeople,
  updateOnePeople,
  createOnePeople,
  deleteOnePeople,
} from "../controllers/peopleController.js";
import {
  createOnePlanet,
  deleteOnePlanet,
  getOnePlanet,
  getPlanets,
  updateOnePlanet
} from "../controllers/planetController.js";
import {
  createOneSpecie,
  deleteOneSpecie,
  getOneSpecie,
  getSpecies,
  updateOneSpecie
} from "../controllers/specieController.js";
import {
  createOneStarship,
  deleteOneStarship,
  getOneStarship,
  getStarships,
  updateOneStarship
} from "../controllers/starshipController.js";
import {
  createOneTransport, deleteOneTransport,
  getOneTransport,
  getTransports,
  updateOneTransport
} from "../controllers/transportController.js";
import {
  createOneVehicle,
  deleteOneVehicle,
  getOneVehicle,
  getVehicles,
  updateOneVehicle
} from "../controllers/vehicleController.js";
import filmRoutes from "./filmRoutes.js";
import transportRoutes from "./transportRoutes.js";

const routes = (app) => {

  // films
  app.use('/films', filmRoutes);

  // people
  app.get("/peoples", getPeoples);
  app.get("/peoples/:id", getOnePeople);
  app.patch("/peoples/:id", updateOnePeople);
  app.post("/peoples", createOnePeople);
  app.delete("/peoples/:id", deleteOnePeople);

  // planets
  app.get("/planets", getPlanets);
  app.get("/planets/:id", getOnePlanet);
  app.patch("/planets/:id", updateOnePlanet);
  app.post("/planets", createOnePlanet);
  app.delete("/planets/:id", deleteOnePlanet);

  // planets
  app.get("/species", getSpecies);
  app.get("/species/:id", getOneSpecie);
  app.patch("/species/:id", updateOneSpecie);
  app.post("/species", createOneSpecie);
  app.delete("/species/:id", deleteOneSpecie);

  // starships
  app.get("/starships", getStarships);
  app.get("/starships/:id", getOneStarship);
  app.patch("/starships/:id", updateOneStarship);
  app.post("/starships", createOneStarship);
  app.delete("/starships/:id", deleteOneStarship);

  // transport
  app.use('/transports', transportRoutes);

  // vehicles
  app.get("/vehicles", getVehicles);
  app.get("/vehicles/:id", getOneVehicle);
  app.patch("/vehicles/:id", updateOneVehicle);
  app.post("/vehicles", createOneVehicle);
  app.delete("/vehicles/:id", deleteOneVehicle);
};

export default routes;
