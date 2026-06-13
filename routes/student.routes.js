import express from "express";
import {
  createStudentProfile,
  updateStudentProfile,
  getMyStudentProfile,
  getStudentById,
  getAllStudents,
  getMyTuitionPosts,
} from "../controllers/student.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  validateCreateStudentProfile,
  validateUpdateStudentProfile,
} from "../validators/student.validator.js";

const router = express.Router();

router.post(
  "/create",
  protect,
  authorizeRoles("student", "admin", "moderator"),
  validateCreateStudentProfile,
  validate,
  (req, res, next) => {
    /* #swagger.tags = ['Student']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 userId: { type: "integer", example: 1 },
                 gradeLevel: { type: "string", example: "Class 10" },
                 institution: { type: "string", example: "Dhaka College" },
                 area: { type: "string", example: "Dhanmondi" },
                contact: { type: "string", example: "01700000000" }
               }
             }
           }
         }
       }
    */
    createStudentProfile(req, res, next);
  },
);

router.put(
  "/update",
  protect,
  authorizeRoles("student", "admin", "moderator"),
  validateUpdateStudentProfile,
  validate,
  (req, res, next) => {
    /* #swagger.tags = ['Student']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 userId: { type: "integer", example: 1 },
                 gradeLevel: { type: "string", example: "Class 10" },
                 institution: { type: "string", example: "Dhaka College" },
                 area: { type: "string", example: "Dhanmondi" },
                 contact: { type: "string", example: "01700000000" }
               }
             }
           }
         }
       }
    */
    updateStudentProfile(req, res, next);
  },
);

router.get(
  "/profile",
  protect,
  authorizeRoles("admin", "moderator", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Student'] */
    getMyStudentProfile(req, res, next);
  },
);

router.get(
  "/students",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Student'] */
    getAllStudents(req, res, next);
  },
);

router.get("/profile/:id", protect, (req, res, next) => {
  /* #swagger.tags = ['Student'] */
  getStudentById(req, res, next);
});

router.get("/myPosts", protect, (req, res, next) => {
  /* #swagger.tags = ['Student'] */
  getMyTuitionPosts(req, res, next);
});

export default router;
