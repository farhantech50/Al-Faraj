import express from "express";
import {
  createAssigned,
  deleteAssignment,
  getStudentAssignments,
} from "../controllers/assign.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/new",
  protect,
  authorizeRoles("admin", "moderator"),

  (req, res, next) => {
    /* #swagger.tags = ['Assign']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 tuitionPostId: { type: "integer", example: 1 },
                 teacherId: { type: "integer", example: 2 },
                 startDate: { type: "string", example: "2026-06-01" },
                 endDate: { type: "string", example: "2026-12-01" }
               }
             }
           }
         }
       }
    */
    createAssigned(req, res, next);
  },
);
router.delete(
  "/delete/:id",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Assign'] */
    deleteAssignment(req, res, next);
  },
);
router.get(
  "/student/:studentId",
  protect,
  authorizeRoles("admin", "moderator", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Assign'] */
    getStudentAssignments(req, res, next);
  },
);

export default router;
