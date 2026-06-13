import express from "express";
import {
  createTeacherProfile,
  updateTeacherProfile,
  getMyTeacherProfile,
  getTeacherById,
  getAllTeachers,
  getMyApplications,
  applyToTuitionPost,
  getAssignedStudents,
} from "../controllers/teacher.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  validateCreateTeacherProfile,
  validateUpdateTeacherProfile,
} from "../validators/teacher.validator.js";

const router = express.Router();

router.post(
  "/create",
  protect,
  authorizeRoles("teacher", "admin", "moderator"),
  validateCreateTeacherProfile,
  validate,
  (req, res, next) => {
    /* #swagger.tags = ['Teacher']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                userId: { type: "integer", example: 1 },
                 bio: { type: "string", example: "Experienced math teacher" },
                 experienceYears: { type: "integer", example: 5 },
                 educationalBackground: { type: "string", example: "BSc Mathematics, University of Dhaka" },
                 cvUrl: { type: "string", example: "https://example.com/cv.pdf" },
                 medium: {
                   type: "array",
                   items: { type: "string" },
                   example: ["online"]
                 },
                 subjectIds: {
                   type: "array",
                   items: { type: "integer" },
                   example: [1, 2]
                 }
               }
             }
           }
         }
       }
    */
    createTeacherProfile(req, res, next);
  },
);

router.put(
  "/update",
  protect,
  authorizeRoles("teacher", "admin", "moderator"),
  validateUpdateTeacherProfile,
  validate,
  (req, res, next) => {
    /* #swagger.tags = ['Teacher']
       #swagger.requestBody = {
         required: false,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                userId: { type: "integer", example: 1 },
                 bio: { type: "string", example: "Updated bio" },
                 experienceYears: { type: "integer", example: 6 },
                 educationalBackground: { type: "string", example: "MSc Mathematics, University of Dhaka" },
                 cvUrl: { type: "string", example: "https://example.com/cv.pdf" },
                 medium: {
                   type: "array",
                   items: { type: "string" },
                   example: ["online"]
                 },
                 subjectIds: {
                   type: "array",
                   items: { type: "integer" },
                   example: [1, 3]
                 }
               }
             }
           }
         }
       }
    */
    updateTeacherProfile(req, res, next);
  },
);

router.get("/profile", protect, authorizeRoles("teacher"), (req, res, next) => {
  /* #swagger.tags = ['Teacher'] */
  getMyTeacherProfile(req, res, next);
});

router.get(
  "/teachers",
  protect,
  authorizeRoles("admin", "moderator", "teacher"),
  (req, res, next) => {
    /* #swagger.tags = ['Teacher'] */
    getAllTeachers(req, res, next);
  },
);
router.get(
  "/getAssignedStudent",
  protect,
  authorizeRoles("admin", "moderator", "teacher"),
  (req, res, next) => {
    /* #swagger.tags = ['Teacher'] */
    getAssignedStudents(req, res, next);
  },
);

router.get("/profile/:id", protect, (req, res, next) => {
  /* #swagger.tags = ['Teacher'] */
  getTeacherById(req, res, next);
});

router.post(
  "/apply",
  protect,
  authorizeRoles("admin", "moderator", "teacher"),
  (req, res, next) => {
    /* #swagger.tags = ['Teacher']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 teacherId: { type: "integer", example: 1 },
                 tuitionPostId: { type: "integer", example: 1 },
                 coverNote: { type: "string", example: "I am an experienced teacher..." }
               }
             }
           }
         }
       }
    */
    applyToTuitionPost(req, res, next);
  },
);

router.get(
  "/myApplications",
  protect,
  authorizeRoles("admin", "moderator", "teacher"),
  (req, res, next) => {
    /* #swagger.tags = ['Teacher'] */
    getMyApplications(req, res, next);
  },
);

export default router;
