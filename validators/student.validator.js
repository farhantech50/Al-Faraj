import { body } from "express-validator";

export const validateCreateStudentProfile = [
  body("userId")
    .notEmpty()
    .withMessage("userId is required")
    .isInt()
    .withMessage("userId must be an integer"),

  body("gradeLevel")
    .notEmpty()
    .withMessage("gradeLevel is required")
    .isInt()
    .withMessage("gradeLevel must be an integer"),

  body("institution")
    .optional()
    .isString()
    .withMessage("Institution must be a string"),
];

export const validateUpdateStudentProfile = [
  body("userId")
    .notEmpty()
    .withMessage("userId is required")
    .isInt()
    .withMessage("userId must be an integer"),

  body("gradeLevel")
    .notEmpty()
    .withMessage("gradeLevel is required")
    .isInt()
    .withMessage("gradeLevel must be an integer"),

  body("institution")
    .optional()
    .isString()
    .withMessage("Institution must be a string"),
];
