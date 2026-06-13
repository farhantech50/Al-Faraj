import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getUsers,
  updateUser,
  changePassword,
  resetPassword,
} from "../controllers/auth.controller.js";
import { refreshToken } from "../controllers/token.controller.js";
import { authorizeRoles, protect } from "../middlewares/auth.middleware.js";
import {
  validateRegister,
  validateLogin,
} from "../validators/auth.validator.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = express.Router();

router.post("/register", validateRegister, validate, (req, res, next) => {
  /* #swagger.tags = ['Auth']
     #swagger.requestBody = {
       required: true,
       content: {
         "application/json": {
           schema: {
             type: "object",
             properties: {
               name: { type: "string", example: "John Doe" },
               email: { type: "string", example: "john@gmail.com" },
               password: { type: "string", example: "password123" },
               role: { type: "string", example: "student" },
               contact: { type: "string", example: "01700000000" },
               address: { type: "string", example: "Dhaka, Bangladesh" },
               gender: { type: "string", enum: ["male", "female", "other"], example: "male" }
             }
           }
         }
       }
     }
  */
  registerUser(req, res, next);
});

router.post("/login", validateLogin, validate, (req, res, next) => {
  /* #swagger.tags = ['Auth']
     #swagger.requestBody = {
       required: true,
       content: {
         "application/json": {
           schema: {
             type: "object",
             properties: {
               email: { type: "string", example: "admin@email.com" },
               password: { type: "string", example: "Soft@123" }
             }
           }
         }
       }
     }
  */
  loginUser(req, res, next);
});

router.post("/logout", (req, res, next) => {
  /* #swagger.tags = ['Auth'] */
  logoutUser(req, res, next);
});

router.post("/refresh", (req, res, next) => {
  /* #swagger.tags = ['Auth'] */
  refreshToken(req, res, next);
});

router.get(
  "/user/all",
  protect,
  authorizeRoles("admin", "moderator", "teacher", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Auth'] */
    getUsers(req, res, next);
  },
);

router.put(
  "/user/update/:id",
  protect,
  authorizeRoles("admin", "moderator", "teacher", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Auth']
     #swagger.requestBody = {
       required: true,
       content: {
         "application/json": {
           schema: {
             type: "object",
             properties: {
               name: { type: "string", example: "John Doe" },
               email: { type: "string", example: "john@gmail.com" },
               contact: { type: "string", example: "01700000000" },
               address: { type: "string", example: "Dhaka, Bangladesh" },
               gender: { type: "string", enum: ["male", "female", "other"], example: "male" },
               role: { type: "string", enum: ["admin", "moderator", "teacher", "student"], example: "teacher" },
               isActive: { type: "boolean", example: true }
             }
           }
         }
       }
     }
  */
    updateUser(req, res, next);
  },
);

router.patch("/change-password", protect, (req, res, next) => {
  /* #swagger.tags = ['Auth'] */
  changePassword(req, res, next);
});

router.patch(
  "/reset-password/:id",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Auth'] */
    resetPassword(req, res, next);
  },
);
export default router;
