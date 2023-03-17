import SpecieModel from "../models/specieModel.js";

const getSpecies = (req, res) => {
    SpecieModel.find((err, species) => {
        res.json(species);
    });
};

const getOneSpecie = (req, res) => {
    SpecieModel.findById(req.params.id, (err, specie) => {
        if (!specie) res.status(404).send("Specie not found");
        res.json(specie);
    });
};

const updateOneSpecie = async (req, res) => {
    try {
        const updateFields = {};

        for (const property in req.body) {
            updateFields[`fields.${property}`] = req.body[property];
        }

        const updatedSpecie = await SpecieModel.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!updatedSpecie) res.status(404).send("Specie not found");
        res.json({ message: "Specie updated successfully", updatedSpecie });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createOneSpecie = async (req, res) => {
    try {
        const newSpecie = new SpecieModel({
            fields: req.body,
            model: "resources.specie",
        });
        const savedSpecie = await newSpecie.save();

        res.json({ message: "Specie created successfully", savedSpecie });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOneSpecie = async (req, res) => {
    try {
        const deletedSpecie = await SpecieModel.deleteOne({ _id: req.params.id });
        res.json({ message: `ID ${req.params.id} deleted`, deletedSpecie });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getSpecies, getOneSpecie, updateOneSpecie, createOneSpecie, deleteOneSpecie };
