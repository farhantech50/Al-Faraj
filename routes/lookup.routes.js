import express from "express";
import {
  getLookupByName,
  createLookup,
  updateLookup,
  deleteLookup,
} from "../controllers/lookup.controller.js";

import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/values/:name",
  protect,
  authorizeRoles("admin", "moderator", "teacher", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Lookup']
     #swagger.summary = 'Get lookup values by name'
     #swagger.parameters['name'] = {
        in: 'path',
        required: true,
        type: 'string',
        example: 'tuitionPostStatus'
     }
  */
    getLookupByName(req, res, next);
  },
);

router.post(
  "/",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Lookup']
     #swagger.summary = 'Create lookup values (bulk)'
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                type: "object",
                required: ["name", "value"],
                properties: {
                  name: { type: "string", example: "tuitionPostStatus" },
                  value: { type: "string", example: "pending" }
                }
              }
            }
          }
        }
     }
  */
    createLookup(req, res, next);
  },
);

router.put(
  "/:id",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Lookup']
     #swagger.summary = 'Update lookup'
     #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer',
        example: 1
     }
     #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                value: { type: "string", example: "approved" },
                isActive: { type: "boolean", example: true }
              }
            }
          }
        }
     }
  */
    updateLookup(req, res, next);
  },
);

router.delete(
  "/:id",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Lookup']
     #swagger.summary = 'Delete lookup'
     #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'integer',
        example: 1
     }
  */
    deleteLookup(req, res, next);
  },
);

export default router;
