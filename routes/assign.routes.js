import express from "express";
import {
  createAssigned,
  getAssignedPostDetailsById,
  getAssignedTuitions,
  unassignTuition,
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
  
               }
             }
           }
         }
       }
    */
    createAssigned(req, res, next);
  },
);

router.get(
  "/all",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Assign'] */
    getAssignedTuitions(req, res, next);
  },
);
router.get(
  "/post/:id",
  protect,
  authorizeRoles("admin", "moderator", "student", "teacher"),
  (req, res, next) => {
    /* #swagger.tags = ['Assign'] */
    getAssignedPostDetailsById(req, res, next);
  },
);

router.patch(
  "/unassign/:assignedId",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Assign'] */
    unassignTuition(req, res, next);
  },
);

export default router;
