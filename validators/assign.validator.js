import { body } from "express-validator";

export const validateCreateAssignment = [
  body("tuitionPostId")
    .notEmpty()
    .withMessage("Tuition post ID is required")
    .isInt()
    .withMessage("Tuition post ID must be an integer"),

  body("teacherId")
    .notEmpty()
    .withMessage("Teacher ID is required")
    .isInt()
    .withMessage("Teacher ID must be an integer"),

  body("startDate").notEmpty().withMessage("Start date is required"),

  body("endDate").optional(),
];
