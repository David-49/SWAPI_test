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

const routes = (app) => {

  // films
  app.get("/films", getFilms);
  app.get("/films/:id", getOneFilm);
  app.patch("/films/:id", updateOneFilm);
  app.post("/films", createOneFilm);
  app.delete("/films/:id", deleteOneFilm);

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
};

export default routes;
