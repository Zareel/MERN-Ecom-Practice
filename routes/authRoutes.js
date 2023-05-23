import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";

// router object
const router = express.Router();

//routing
// REGISTER || Method: post
router.post("/register", registerController);

// LOGIN || Method: post

router.post("/login", loginController);

//test routes || get
router.get("/test", requireSignIn, testController);

export default router;
