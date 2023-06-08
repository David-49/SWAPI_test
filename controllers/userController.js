import UserModel from "../models/userModel.js";

const getUsers = (req, res) => {
  UserModel.find((err, users) => {
    res.json(users);
  });
};

const getOneUser = (req, res) => {
  UserModel.findById(req.params.id, (err, user) => {
    if (!user) res.status(404).send("User not found");
    res.json(user);
  });
};

// peux mieux faire pour la mise à jour du mdp
const updateOneUser = async (req, res) => {
  try {
    const updateFields = {};

    for (const property in req.body) {
      updateFields[property] = req.body[property];
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!updatedUser) res.status(404).send("User not found");
    res.json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOneUser = async (req, res) => {
  try {
    const deletedUser = await UserModel.deleteOne({ _id: req.params.id });
    res.json({ message: `ID ${req.params.id} deleted`, deletedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getUsers, getOneUser, updateOneUser, deleteOneUser };
