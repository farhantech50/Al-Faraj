import { body } from "express-validator";

export const validateCreateTuitionPost = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  body("budget").optional().isNumeric().withMessage("Budget must be a number"),

  body("medium")
    .notEmpty()
    .withMessage("Medium is required")
    .isString()
    .withMessage("Medium must be online or home_tuition"),

  body("area")
    .notEmpty()
    .withMessage("Area is required")
    .isInt()
    .withMessage("Area must be a valid lookup id"),

  body("days")
    .notEmpty()
    .withMessage("Days are required")
    .isArray({ min: 1 })
    .withMessage("At least one day is required"),

  body("startTime")
    .notEmpty()
    .withMessage("Start time is required")
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("Start time must be in HH:MM format"),

  body("endTime")
    .notEmpty()
    .withMessage("End time is required")
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("End time must be in HH:MM format"),

  body("subjectIds")
    .notEmpty()
    .withMessage("Subjects are required")
    .isArray({ min: 1 })
    .withMessage("At least one subject is required"),
];

export const validateUpdateTuitionPost = [
  body("title").optional().isString().withMessage("Title must be a string"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),

  body("budget").optional().isNumeric().withMessage("Budget must be a number"),

  body("medium")
    .optional()
    .isString()
    .withMessage("Medium must be online or home_tuition"),

  body("area")
    .notEmpty()
    .withMessage("Area is required")
    .isInt()
    .withMessage("Area must be a valid lookup id"),

  body("days")
    .optional()
    .isArray({ min: 1 })
    .withMessage("At least one day is required"),

  body("startTime")
    .optional()
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("Start time must be in HH:MM format"),

  body("endTime")
    .optional()
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .withMessage("End time must be in HH:MM format"),

  body("subjectIds")
    .optional()
    .isArray({ min: 1 })
    .withMessage("At least one subject is required"),
];
