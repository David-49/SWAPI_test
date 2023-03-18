import TransportModel from "../models/transportModel.js";

const getTransports = (req, res) => {
    TransportModel.find((err, transports) => {
        res.json(transports);
    });
};

const getOneTransport = (req, res) => {
    TransportModel.findById(req.params.id, (err, transport) => {
        if (!transport) res.status(404).send("Transport not found");
        res.json(transport);
    });
};

const updateOneTransport = async (req, res) => {
    try {
        const updateFields = {};

        for (const property in req.body) {
            updateFields[`fields.${property}`] = req.body[property];
        }

        const updatedTransport = await TransportModel.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!updatedTransport) res.status(404).send("Transport not found");
        res.json({ message: "Transport updated successfully", updatedTransport });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createOneTransport = async (req, res) => {
    try {
        const newTransport = new TransportModel({
            fields: req.body,
            model: "resources.transport",
        });
        const savedTransport = await newTransport.save();

        res.status(201).json({ message: "Transport created successfully", savedTransport });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOneTransport = async (req, res) => {
    try {
        const deletedTransport = await TransportModel.deleteOne({ _id: req.params.id });
        res.json({ message: `ID ${req.params.id} deleted`, deletedTransport });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getTransports, getOneTransport, updateOneTransport, createOneTransport, deleteOneTransport };
