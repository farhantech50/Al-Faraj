import dashboardRoutes from "./dashboard.routes.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";
import {
  getAdminDashboardCardStats,
  getStudentDashboardCardStats,
  getTeacherDashboardCardStats,
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
  "/teacherDashboardCard",
  protect,
  authorizeRoles("admin", "moderator", "teacher"),
  (req, res, next) => {
    /* #swagger.tags = ['Dashboard'] */
    getTeacherDashboardCardStats(req, res, next);
  },
);
router.get(
  "/studentDashboardCard",
  protect,
  authorizeRoles("admin", "moderator", "student"),
  (req, res, next) => {
    /* #swagger.tags = ['Dashboard'] */
    getStudentDashboardCardStats(req, res, next);
  },
);
export default router;
