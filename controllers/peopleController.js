import PeopleModel from "../models/peopleModel.js";

const getPeoples = (req, res) => {
  console.log("GET_PEOPLES");
  PeopleModel.find((err, peoples) => {
    res.json(peoples);
  });
};

const getOnePeople = (req, res) => {
  PeopleModel.findById(req.params.id, (err, people) => {
    res.json(people);
  });
};

const updateOnePeople = async (req, res) => {
  console.log(req.body.name);
  try {
    const updatedPlanet = await PeopleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "Planet updated successfully", updatedPlanet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getPeoples, getOnePeople, updateOnePeople };
