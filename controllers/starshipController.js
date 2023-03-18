import StarshipModel from "../models/starshipModel.js";

const getStarships = (req, res) => {
    StarshipModel.find((err, starships) => {
        res.json(starships);
    });
};

const getOneStarship = (req, res) => {
    StarshipModel.findById(req.params.id, (err, starship) => {
        if (!starship) res.status(404).send("Starship not found");
        res.json(starship);
    });
};

const updateOneStarship = async (req, res) => {
    try {
        const updateFields = {};

        for (const property in req.body) {
            updateFields[`fields.${property}`] = req.body[property];
        }

        const updatedStarship = await StarshipModel.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!updatedStarship) res.status(404).send("Starship not found");
        res.json({ message: "Starship updated successfully", updatedStarship });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createOneStarship = async (req, res) => {
    try {
        const newStarship = new StarshipModel({
            fields: req.body,
            model: "resources.starship",
        });
        const savedStarship = await newStarship.save();

        res.status(201).json({ message: "Starship created successfully", savedStarship });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOneStarship = async (req, res) => {
    try {
        const deletedStarship = await StarshipModel.deleteOne({ _id: req.params.id });
        res.json({ message: `ID ${req.params.id} deleted`, deletedStarship });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getStarships, getOneStarship, updateOneStarship, createOneStarship, deleteOneStarship };
