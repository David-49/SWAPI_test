import PlanetModel from "../models/planetModel.js";

const getPlanets = (req, res) => {
    PlanetModel.find((err, planets) => {
        res.json(planets);
    });
};

const getOnePlanet = (req, res) => {
    PlanetModel.findById(req.params.id, (err, planet) => {
        if (!planet) res.status(404).send("Planet not found");
        res.json(planet);
    });
};

const updateOnePlanet = async (req, res) => {
    try {
        const updateFields = {};

        for (const property in req.body) {
            updateFields[`fields.${property}`] = req.body[property];
        }

        const updatedPlanet = await PlanetModel.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!updatedPlanet) res.status(404).send("Planet not found");
        res.json({ message: "Planet updated successfully", updatedPlanet });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createOnePlanet = async (req, res) => {
    try {
        const newPlanet = new PlanetModel({
            fields: req.body,
            model: "resources.planet",
        });
        const savedPlanet = await newPlanet.save();

        res.json({ message: "Planet created successfully", savedPlanet });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOnePlanet = async (req, res) => {
    try {
        const deletedPlanet = await PlanetModel.deleteOne({ _id: req.params.id });
        res.json({ message: `ID ${req.params.id} deleted`, deletedPlanet });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getPlanets, getOnePlanet, updateOnePlanet, createOnePlanet, deleteOnePlanet };
