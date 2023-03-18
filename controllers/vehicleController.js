import VehicleModel from "../models/vehicleModel.js";

const getVehicles = (req, res) => {
    VehicleModel.find((err, vehicles) => {
        res.json(vehicles);
    });
};

const getOneVehicle = (req, res) => {
    VehicleModel.findById(req.params.id, (err, vehicle) => {
        if (!vehicle) res.status(404).send("Vehicle not found");
        res.json(vehicle);
    });
};

const updateOneVehicle = async (req, res) => {
    try {
        const updateFields = {};

        for (const property in req.body) {
            updateFields[`fields.${property}`] = req.body[property];
        }

        const updatedVehicle = await VehicleModel.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!updatedVehicle) res.status(404).send("Vehicle not found");
        res.json({ message: "Vehicle updated successfully", updatedVehicle });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createOneVehicle = async (req, res) => {
    try {
        const newVehicle = new VehicleModel({
            fields: req.body,
            model: "resources.vehicle",
        });
        const savedVehicle = await newVehicle.save();

        res.status(201).json({ message: "Vehicle created successfully", savedVehicle });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOneVehicle = async (req, res) => {
    try {
        const deletedVehicle = await VehicleModel.deleteOne({ _id: req.params.id });
        res.json({ message: `ID ${req.params.id} deleted`, deletedVehicle });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getVehicles, getOneVehicle, updateOneVehicle, createOneVehicle, deleteOneVehicle };
