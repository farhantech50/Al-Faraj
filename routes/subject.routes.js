import express from "express";
import {
  createSubject,
  getAllSubjects,
  updateSubject,
  deleteSubject,
} from "../controllers/subject.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/all", protect, (req, res, next) => {
  /* #swagger.tags = ['Subject'] */
  getAllSubjects(req, res, next);
});

router.post(
  "/create",
  protect,
  authorizeRoles("admin", "moderator"),

  (req, res, next) => {
    /* #swagger.tags = ['Subject']
       #swagger.requestBody = {
         required: true,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 name: { type: "string", example: "Mathematics" },
                 description: { type: "string", example: "Math subject" }
               }
             }
           }
         }
       }
    */
    createSubject(req, res, next);
  },
);

router.put(
  "/update/:id",
  protect,
  authorizeRoles("admin", "moderator"),

  (req, res, next) => {
    /* #swagger.tags = ['Subject']
       #swagger.requestBody = {
         required: false,
         content: {
           "application/json": {
             schema: {
               type: "object",
               properties: {
                 name: { type: "string", example: "Mathematics" },
                 description: { type: "string", example: "Updated description" }
               }
             }
           }
         }
       }
    */
    updateSubject(req, res, next);
  },
);

router.delete(
  "/delete/:id",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Subject'] */
    deleteSubject(req, res, next);
  },
);

export default router;
