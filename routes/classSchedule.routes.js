import express from "express";
import {
  createScheduleOverride,
  getStudentSchedule,
  getTeacherSchedule,
  getUserClassSchedulesByUserId,
  updateClassSchedule,
} from "../controllers/classSchedule.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.put(
  "/update/:id",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Schedule']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 days: { type: "array", items: { type: "string" }, example: ["monday", "wednesday"] },
                 startTime: { type: "string", example: "16:00" },
                 endTime: { type: "string", example: "18:00" },
               }
             }
           }
         }
       }
    */
    updateClassSchedule(req, res, next);
  },
);

router.get(
  "/teacher",
  protect,
  authorizeRoles("teacher", "admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Schedule'] */
    getTeacherSchedule(req, res, next);
  },
);
router.get(
  "/user",
  protect,
  authorizeRoles("teacher", "admin", "moderator", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Schedule'] */
    getUserClassSchedulesByUserId(req, res, next);
  },
);
router.get(
  "/student",
  protect,
  authorizeRoles("student", "admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Schedule'] */
    getStudentSchedule(req, res, next);
  },
);
export default router;
