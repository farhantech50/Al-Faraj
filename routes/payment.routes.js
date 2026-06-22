import express from "express";

import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";
import { getPaymentByTeacherId } from "../controllers/payment.controller.js";

const router = express.Router();

router.get(
  "/teacher/:id",
  protect,
  authorizeRoles("admin", "moderator", "student", "teacher"),
  (req, res, next) => {
    /* #swagger.tags = ['Payment'] */
    getPaymentByTeacherId(req, res, next);
  },
);

export default router;
