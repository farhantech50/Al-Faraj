import express from "express";
import {
  createScheduleOverride,
  getStudentSchedule,
  getStudentUpcomingClass,
  getTeacherSchedule,
  getTeacherUpcomingClass,
  getUserClassSchedulesByUserId,
  updateClassSchedule,
  updateMeetingLink,
} from "../controllers/classSchedule.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.put(
  "/update/:id",
  protect,
  authorizeRoles("admin", "moderator", "teacher", "student"),
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
router.get(
  "/teacher/upcomingClass",
  protect,
  authorizeRoles("teacher", "admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Schedule'] */
    getTeacherUpcomingClass(req, res, next);
  },
);
router.get(
  "/student/upcomingClass",
  protect,
  authorizeRoles("student", "admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Schedule'] */
    getStudentUpcomingClass(req, res, next);
  },
);
router.patch("/:id", protect, (req, res, next) => {
  /* #swagger.tags = ['Schedule'] */

  /* #swagger.parameters['id'] = {
      in: 'path',
      description: 'Class Schedule ID',
      required: true,
      type: 'integer'
  } */

  /* #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              meetingLink: {
                type: "string",
                example: "https://zoom.us/j/123456789"
              }
            }
          }
        }
      }
  } */

  updateMeetingLink(req, res, next);
});
export default router;
