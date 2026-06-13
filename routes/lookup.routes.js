import express from "express";
import {
  getLookupByName,
  createLookup,
  updateLookup,
  deleteLookup,
} from "../controllers/lookup.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { validateLookup } from "../validators/lookup.validator.js";

const router = express.Router();

router.get("/values/:name", (req, res, next) => {
  /* #swagger.tags = ['Lookup'] */
  getLookupByName(req, res, next);
});

router.post(
  "/create",
  protect,
  authorizeRoles("admin", "moderator"),
  validateLookup,
  validate,
  (req, res, next) => {
    /* #swagger.tags = ['Lookup']
   #swagger.requestBody = {
     required: true,
     content: {
       "application/json": {
         schema: {
           type: "array",
           items: {
             type: "object",
             properties: {
               name: { type: "string", example: "tuitionPostStatus" },
               value: { type: "string", example: "pending" }
             },
             required: ["name", "value"]
           },
           example: [
             { name: "tuitionPostStatus", value: "pending" },
             { name: "tuitionPostStatus", value: "approved" },
             { name: "tuitionPostStatus", value: "rejected" },
             { name: "tuitionPostStatus", value: "closed" }
           ]
         }
       }
     }
   }
*/
    createLookup(req, res, next);
  },
);
router.put(
  "/update/:id",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Lookup'] */
    updateLookup(req, res, next);
  },
);
router.delete(
  "/delete/:id",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Lookup'] */
    deleteLookup(req, res, next);
  },
);

export default router;
