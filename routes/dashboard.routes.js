import dashboardRoutes from "./dashboard.routes.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";
import {
  getAdminDashboardCardStats,
  getAdminDashboardChartStats,
} from "../controllers/dashboard.controller.js";
import express from "express";

const router = express.Router();

router.get(
  "/adminDashboardCard",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Dashboard'] */
    getAdminDashboardCardStats(req, res, next);
  },
);
router.get(
  "/adminDashboardChart",
  protect,
  authorizeRoles("admin", "moderator"),
  (req, res, next) => {
    /* #swagger.tags = ['Dashboard'] */
    getAdminDashboardChartStats(req, res, next);
  },
);
export default router;
