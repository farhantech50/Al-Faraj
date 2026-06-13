import express from "express";
import {
  createHomework,
  gradeHomework,
  submitHomework,
  getAllAssignments,
  getAssignmentsByTeacher,
  getAssignmentsByStudent,
} from "../controllers/assignment.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post(
  "/new",
  protect,
  authorizeRoles("admin", "moderator", "teacher"),
  (req, res, next) => {
    /* #swagger.tags = ['Assignments']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 studentId: { type: "integer", example: 5 },
                 title: { type: "string", example: "Math Assignment 1" },
                 description: { type: "string", example: "Solve chapter 3 exercises" },
                 dueDate: { type: "string", example: "2026-06-15" }
               }
             }
           }
         }
       }
    */
    createHomework(req, res, next);
  },
);

router.patch(
  "/submit/:id",
  protect,
  authorizeRoles("admin", "moderator", "student"),
  upload.single("file"),
  (req, res, next) => {
    /* #swagger.tags = ['Assignments']
       #swagger.requestBody = {
         required: true,
         content: {
           "multipart/form-data": {
             schema: {
               type: "object",
               properties: {
                 file: { type: "string", format: "binary" },
                 note: { type: "string", example: "My homework submission note" }
               }
             }
           }
         }
       }
    */
    submitHomework(req, res, next);
  },
);

router.patch(
  "/grade",
  protect,
  authorizeRoles("admin", "moderator", "teacher"),
  (req, res, next) => {
    /* #swagger.tags = ['Assignments']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 id: { type: "integer", example: 1 },
                 grade: { type: "integer", example: 85 },
                 feedback: { type: "string", example: "Good work, improve formatting" }
               }
             }
           }
         }
       }
    */
    gradeHomework(req, res, next);
  },
);

router.get(
  "/all",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Assignments'] */
    getAllAssignments(req, res, next);
  },
);

router.get(
  "/by-teacher",
  protect,
  authorizeRoles("admin", "moderator", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Assignments'] */
    getAssignmentsByTeacher(req, res, next);
  },
);

router.get(
  "/by-student",
  protect,
  authorizeRoles("teacher", "admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Assignments'] */
    getAssignmentsByStudent(req, res, next);
  },
);

export default router;
