import FilmModel from "../models/filmModel.js";

const getFilms = (req, res) => {
  FilmModel.find((err, films) => {
    res.json(films);
  });
};

const getOneFilm = (req, res) => {
  FilmModel.findById(req.params.id, (err, film) => {
    if (!film) res.status(404).send("Film not found");
    res.json(film);
  });
};

const updateOneFilm = async (req, res) => {
  try {
    const updateFields = {};

    for (const property in req.body) {
      updateFields[`fields.${property}`] = req.body[property];
    }

    const updatedFilm = await FilmModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!updatedFilm) res.status(404).send("Film not found");
    res.json({ message: "Film updated successfully", updatedFilm });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOneFilm = async (req, res) => {
  try {
    const newFilm = new FilmModel({
      fields: req.body,
      model: "resources.film",
    });
    const savedFilm = await newFilm.save();

    res.json({ message: "Film created successfully", savedFilm });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOneFilm = async (req, res) => {
  try {
    const deletedFilm = await FilmModel.deleteOne({ _id: req.params.id });
    res.json({ message: `ID ${req.params.id} deleted`, deletedFilm });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getFilms, getOneFilm, updateOneFilm, createOneFilm, deleteOneFilm };
