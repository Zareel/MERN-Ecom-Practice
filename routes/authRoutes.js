import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";

// router object
const router = express.Router();

//routing
// REGISTER || Method: post
router.post("/register", registerController);

// LOGIN || Method: post

router.post("/login", loginController);

export default router;
