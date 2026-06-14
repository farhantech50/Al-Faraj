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

const router = express.Router();

router.post(
  "/create",
  protect,
  authorizeRoles("student", "admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Student']
       #swagger.summary = 'Create student profile'
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               required: ["userId"],
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
  (req, res, next) => {
    /* #swagger.tags = ['Student']
       #swagger.summary = 'Update student profile'
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
    /* #swagger.tags = ['Student']
       #swagger.summary = 'Get my student profile'
    */
    getMyStudentProfile(req, res, next);
  },
);

router.get(
  "/students",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Student']
       #swagger.summary = 'Get all students'
       #swagger.parameters['mode'] = {
          in: 'query',
          required: false,
          type: 'string',
          example: 'online'
       }
    */
    getAllStudents(req, res, next);
  },
);

router.get("/profile/:id", protect, (req, res, next) => {
  /* #swagger.tags = ['Student']
       #swagger.summary = 'Get student by user id'
       #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'integer',
          example: 1
       }
    */
  getStudentById(req, res, next);
});

router.get("/myPosts", protect, (req, res, next) => {
  /* #swagger.tags = ['Student'] */
  getMyTuitionPosts(req, res, next);
});

export default router;
