import JWT from "jsonwebtoken"
import User from "../models/user.model.js";
const protectRoute = async (req, res, next) => {
    try {
        const authToken = req.cookies.jwt;
        if (!authToken) {
            return res.status(401).json({ error: "Unauthorized - token missing" });
        }
        const decodedToken = JWT.verify(authToken, process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ error: "Unauthorized - token invalid" });
        }
        const user = await User.findById(decodedToken.userId).select("-password");//select without password
        if (!user) {
            return res.status(401).json({ error: "Unauthorized - user not found" });
        }
        req.user = user;
        next(); //basically saying that the user is authenticated and ready to go to the next step
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};

export default protectRoute