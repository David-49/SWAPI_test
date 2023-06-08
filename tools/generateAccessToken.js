import "../loadEnv.js";
import jwt from "jsonwebtoken";

export default (user) => {
  return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1800s",
  });
};
