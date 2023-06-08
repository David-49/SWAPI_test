import "../../loadEnv.js";
import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  const decodedToken = jwt.decode(token);

  if (!decodedToken.admin) {
    return res.sendStatus(401);
  }

  next();
};
