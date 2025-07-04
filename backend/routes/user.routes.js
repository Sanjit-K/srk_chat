import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {getUsersForSidebar , setStatus} from "../controllers/user.controller.js"
const router = express.Router();

router.get("/", protectRoute,getUsersForSidebar)
router.post("/setStatus",setStatus)

export default router