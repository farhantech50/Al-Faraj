import express from "express";
import {
  createAnnouncement,
  deleteAnnouncement,
  getActiveAnnouncements,
  getAllAnnouncements,
} from "../controllers/announcement.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", protect, authorizeRoles("admin"), (req, res, next) => {
  /* 
      #swagger.tags = ['Announcement']
      #swagger.summary = 'Create announcement'
      #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: [
                "title",
                "message",
                "roles",
                "startAt",
                "endAt"
              ],
              properties: {
                title: {
                  type: "string",
                  example: "System Maintenance"
                },
                message: {
                  type: "string",
                  example: "System will be unavailable at 10 PM"
                },
                roles: {
                  type: "array",
                  items: {
                    type: "string"
                  },
                  example: [
                    "teacher",
                    "student"
                  ]
                },
                startAt: {
                  type: "string",
                  example: "2026-06-17T10:00:00"
                },
                endAt: {
                  type: "string",
                  example: "2026-06-17T12:00:00"
                }
              }
            }
          }
        }
      }
    */

  createAnnouncement(req, res, next);
});

router.get("/active", protect, (req, res, next) => {
  /*
      #swagger.tags = ['Announcement']
      #swagger.summary = 'Get active announcements for user'
    */

  getActiveAnnouncements(req, res, next);
});

router.get("/all", protect, authorizeRoles("admin"), (req, res, next) => {
  /*
      #swagger.tags = ['Announcement']
      #swagger.summary = 'Get all announcements'
    */

  getAllAnnouncements(req, res, next);
});
router.put("/:id", protect, authorizeRoles("admin"), (req, res, next) => {
  /* #swagger.tags = ['Announcement'] */
  updateAnnouncement(req, res, next);
});

router.delete("/:id", protect, authorizeRoles("admin"), (req, res, next) => {
  /* #swagger.tags = ['Announcement'] */
  deleteAnnouncement(req, res, next);
});
export default router;
