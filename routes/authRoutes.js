import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

// router object
const router = express.Router();

//routing
// REGISTER || Method: post
router.post("/register", isAdmin, registerController);

// LOGIN || Method: post

router.post("/login", loginController);

//test routes || get
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
