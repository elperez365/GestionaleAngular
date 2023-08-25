const JWT = require("jsonwebtoken");

module.exports = (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    JWT.verify(token, "longer-secret-is-better");
    next();
  } catch (error) {
    res.status(402).json({ message: "No token provided" });
  }
};
