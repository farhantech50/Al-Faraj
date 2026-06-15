import express from "express";
import {
  createTuitionPost,
  updateTuitionPost,
  getAllTuitionPosts,
  getTuitionPostById,
  updateTuitionPostStatus,
  deleteTuitionPost,
  getTuitionsHavePendingApplications,
  deleteTeacherApplication,
  getTuitionApplicationById,
  shortlistTeachers,
} from "../controllers/tuition.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/create",
  protect,
  authorizeRoles("student", "admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Tuition']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 title: { type: "string", example: "Need Math and Physics Teacher" },
                 description: { type: "string", example: "Looking for an experienced teacher" },
                 budget: { type: "number", example: 3000 },
                 area: { type: "integer", example: 101 },
                 days: {
                   type: "array",
                   items: { type: "string" },
                   example: ["monday", "wednesday"]
                 },
                 startTime: { type: "string", example: "16:00" },
                 endTime: { type: "string", example: "18:00" },
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
    createTuitionPost(req, res, next);
  },
);

router.put(
  "/update/:id",
  protect,
  authorizeRoles("student", "admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Tuition']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 title: { type: "string", example: "Updated Title" },
                 description: { type: "string", example: "Updated description" },
                 budget: { type: "number", example: 4000 },
                 area: { type: "integer", example: 102 },
                 days: {
                   type: "array",
                   items: { type: "string" },
                   example: ["tuesday", "thursday"]
                 },
                 startTime: { type: "string", example: "17:00" },
                 endTime: { type: "string", example: "19:00" },
                 subjectIds: {
                   type: "array",
                   items: { type: "integer" },
                   example: [1]
                 }
               }
             }
           }
         }
       }
    */
    updateTuitionPost(req, res, next);
  },
);

router.put(
  "/status/:id",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Tuition']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 status: { type: "integer", example: 23 }
               }
             }
           }
         }
       }
    */
    updateTuitionPostStatus(req, res, next);
  },
);

router.get("/all", protect, (req, res, next) => {
  /* #swagger.tags = ['Tuition'] */
  getAllTuitionPosts(req, res, next);
});

router.get("/:id", protect, (req, res, next) => {
  /* #swagger.tags = ['Tuition'] */
  getTuitionPostById(req, res, next);
});

router.delete(
  "/delete/:id",
  protect,
  authorizeRoles("admin", "moderator", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Tuition'] */
    deleteTuitionPost(req, res, next);
  },
);

router.get("/pending/teacherApplications", protect, (req, res, next) => {
  /* #swagger.tags = ['Tuition'] */
  getTuitionsHavePendingApplications(req, res, next);
});
router.delete(
  "/teacherApplication/delete/:id",
  protect,
  authorizeRoles("admin", "moderator", "teacher"),
  (req, res, next) => {
    /* #swagger.tags = ['Tuition'] */
    deleteTeacherApplication(req, res, next);
  },
);

router.get(
  "/applications/:id",
  protect,
  authorizeRoles("admin", "moderator", "teacher", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Tuition'] */
    getTuitionApplicationById(req, res, next);
  },
);

router.post(
  "/shortlist",
  protect,
  authorizeRoles("admin", "moderator"),

  (req, res, next) => {
    /* #swagger.tags = ['Tuition']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 tuitionPostId: { type: "integer", example: 12 },
                 teacherIds: {
                   type: "array",
                   items: { type: "integer" },
                   example: [3, 5, 9]
                 }
               },
               required: ["tuitionPostId", "teacherIds"]
             }
           }
         }
       }
    */
    shortlistTeachers(req, res, next);
  },
);
export default router;
