import FilmModel from "../models/filmModel.js";

const getFilms = (req, res) => {
  FilmModel.find((err, films) => {
    res.json(films);
  });
};

const getOneFilm = (req, res) => {
  FilmModel.findById(req.params.id, (err, film) => {
    res.json(film);
  });
};

export { getFilms, getOneFilm };
