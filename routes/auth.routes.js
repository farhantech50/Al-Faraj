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

const router = express.Router();

router.post("/register", (req, res, next) => {
  /* #swagger.tags = ['Auth']
     #swagger.summary = 'Register new user'
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "email", "password", "role"],
              properties: {
                name: { type: "string", example: "Admin" },
                email: { type: "string", example: "admin@email.com" },
                password: { type: "string", example: "Soft@123" },
                address: { type: "string", example: "Dhaka, Bangladesh" },
                contact: { type: "string", example: "+8801700000000" },
                gender: { type: "string", example: "male" },
                role: { type: "string", example: "admin" }
              }
            }
          }
        }
     }
  */
  registerUser(req, res, next);
});

router.post("/login", (req, res, next) => {
  /* #swagger.tags = ['Auth']
     #swagger.summary = 'Login user'
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: { type: "string", example: "admin@gmail.com" },
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
  /* #swagger.tags = ['Auth']
     #swagger.summary = 'Logout user'
  */
  logoutUser(req, res, next);
});

router.post("/refresh", (req, res, next) => {
  /* #swagger.tags = ['Auth']
     #swagger.summary = 'Refresh token'
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                refreshToken: { type: "string", example: "token_here" }
              }
            }
          }
        }
     }
  */
  refreshToken(req, res, next);
});

router.get(
  "/user/all",
  protect,
  authorizeRoles("admin", "moderator", "teacher", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Auth']
     #swagger.summary = 'Get all users'
  */
    getUsers(req, res, next);
  },
);

router.put(
  "/user/update/:id",
  protect,
  authorizeRoles("admin", "moderator", "teacher", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Auth']
     #swagger.summary = 'Update user'
     #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer',
        example: 1
     }
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string", example: "Updated Name" },
                contact: { type: "string", example: "+8801711111111" },
                address: { type: "string", example: "Updated Address" },
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
  /* #swagger.tags = ['Auth']
     #swagger.summary = 'Change password'
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["oldPassword", "newPassword"],
              properties: {
                oldPassword: { type: "string", example: "old123" },
                newPassword: { type: "string", example: "new123456" }
              }
            }
          }
        }
     }
  */
  changePassword(req, res, next);
});

router.patch(
  "/reset-password/:id",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Auth']
     #swagger.summary = 'Reset password'
     #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer',
        example: 1
     }
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["newPassword"],
              properties: {
                newPassword: { type: "string", example: "reset123456" }
              }
            }
          }
        }
     }
  */
    resetPassword(req, res, next);
  },
);

export default router;
