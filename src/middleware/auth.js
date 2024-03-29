const jwt = require("jsonwebtoken")
const {JWT_KEY} = require("../config/serverConfig")
const authenticateUser = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token,JWT_KEY);
        req.userId = decoded.userId;
        next();
      } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
      }
}
module.exports = authenticateUser;