import { getFilms, getOneFilm } from "../controllers/filmController.js";
import {
  getPeoples,
  getOnePeople,
  updateOnePeople,
  createOnePeople,
  deleteOnePeople,
} from "../controllers/peopleController.js";

const routes = (app) => {
  app.get("/films", getFilms);
  app.get("/films/:id", getOneFilm);

  app.get("/peoples", getPeoples);
  app.get("/peoples/:id", getOnePeople);
  app.patch("/peoples/:id", updateOnePeople);
  app.post("/peoples", createOnePeople);
  app.delete("/peoples/:id", deleteOnePeople);
};

export default routes;
