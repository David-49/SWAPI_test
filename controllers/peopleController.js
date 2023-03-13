import PeopleModel from "../models/peopleModel.js";

const getPeoples = (req, res) => {
  PeopleModel.find((err, peoples) => {
    res.json(peoples);
  });
};

const getOnePeople = (req, res) => {
  PeopleModel.findById(req.params.id, (err, people) => {
    if (!people) res.status(404).send("People not found");
    res.json(people);
  });
};

const updateOnePeople = async (req, res) => {
  try {
    const updateFields = {};

    for (const property in req.body) {
      updateFields[`fields.${property}`] = req.body[property];
    }

    const updatedPeople = await PeopleModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!updatedPeople) res.status(404).send("People not found");
    res.json({ message: "People updated successfully", updatedPeople });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOnePeople = async (req, res) => {
  try {
    const newPeople = new PeopleModel({
      fields: req.body,
      model: "resources.people",
    });
    const savedPeople = await newPeople.save();

    res.json({ message: "People created successfully", savedPeople });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOnePeople = async (req, res) => {
  try {
    const deletedPeople = await PeopleModel.deleteOne({ _id: req.params.id });
    res.json({ message: `ID ${req.params.id} deleted`, deletedPeople });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getPeoples,
  getOnePeople,
  updateOnePeople,
  createOnePeople,
  deleteOnePeople,
};
