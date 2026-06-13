import express from "express";
import {
  createScheduleOverride,
  getStudentSchedule,
  getTeacherSchedule,
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
                 medium: { type: "string", enum: ["online", "home_tuition"], example: "online" }
               }
             }
           }
         }
       }
    */
    updateClassSchedule(req, res, next);
  },
);
router.post(
  "/override",
  protect,
  authorizeRoles("teacher", "admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Schedule']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 teacherId: { type: "integer", example: 1 },
                 classScheduleId: { type: "integer", example: 1 },
                 date: { type: "string", example: "2026-05-06" },
                 startTime: { type: "string", example: "17:00" },
                 endTime: { type: "string", example: "19:00" },
                 medium: { type: "string", example: "online" }
               }
             }
           }
         }
       }
    */
    createScheduleOverride(req, res, next);
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
  "/student",
  protect,
  authorizeRoles("student", "admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Schedule'] */
    getStudentSchedule(req, res, next);
  },
);
export default router;
