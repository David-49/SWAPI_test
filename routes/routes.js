import { getFilms, getOneFilm } from "../controllers/filmController.js";
import { getPeoples, getOnePeople } from "../controllers/peopleController.js";

const routes = (app) => {
  app.get("/films", async (req, res) => {
    getFilms;
  });
  app.get("/films/:id", getOneFilm);

  app.get("/peoples", async (req, res) => {
    try {
      console.log("GET");
      getPeoples;
    } catch (error) {
      console.log("Error :", error);
    }
  });
  app.get("/peoples/:id", getOnePeople);
};

export default routes;
