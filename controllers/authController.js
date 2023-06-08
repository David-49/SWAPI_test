import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateAccessToken from "../tools/generateAccessToken.js";

const SALT_ROUNDS = 10;

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ pseudo: req.body.pseudo });

    if (!user) res.status(404).send("Pseudo incorrect");

    const result = await bcrypt.compare(req.body.password, user.password);

    if (result === true) {
      const accessToken = generateAccessToken(user);
      res.send({
        accessToken,
      });
    } else {
      res.send("Mot de passe incorrect");
    }
  } catch (error) {
    console.error(error);
  }
};

const signup = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, SALT_ROUNDS);

    const newUser = new UserModel({
      pseudo: req.body.pseudo,
      password: hash,
      admin: req.body.admin,
      model: "resources.user",
    });

    const savedUser = await newUser.save();

    const accessToken = generateAccessToken(savedUser);

    res.send({
      accessToken,
    });

    res.status(201).json({ message: "User created successfully", savedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { login, signup };
