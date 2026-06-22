import { Router } from "express";
import authRoutes from "./auth.routes.js";
import teacherRoutes from "./teacher.routes.js";
import subjectRoutes from "./subject.routes.js";
import studentRoutes from "./student.routes.js";
import tuitionRoutes from "./tuition.routes.js";
import assignRoutes from "./assign.routes.js";
import classScheduleRoutes from "./classSchedule.routes.js";
import lookupRoutes from "./lookup.routes.js";
import assignmentRoutes from "./assignment.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import announcementRoutes from "./accouncement.routes.js";
import paymentRoutes from "./payment.routes.js";

const router = Router();

router.use("/api/auth", authRoutes);
router.use("/api/teacher", teacherRoutes);
router.use("/api/subject", subjectRoutes);
router.use("/api/assign", assignRoutes);
router.use("/api/student", studentRoutes);
router.use("/api/tuition", tuitionRoutes);
router.use("/api/class-schedule", classScheduleRoutes);
router.use("/api/lookup", lookupRoutes);
router.use("/api/assignment", assignmentRoutes);
router.use("/api/dashboard", dashboardRoutes);
router.use("/api/announcements", announcementRoutes);
router.use("/api/payment", paymentRoutes);

export default router;
