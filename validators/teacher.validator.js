import { body } from "express-validator";

export const validateCreateTeacherProfile = [
  body("userId")
    .notEmpty()
    .withMessage("userId is required")
    .isInt()
    .withMessage("userId must be an integer"),

  body("bio").optional().isString().withMessage("Bio must be a string"),

  body("experienceYears")
    .notEmpty()
    .withMessage("Experience years is required")
    .isInt({ min: 0 })
    .withMessage("Experience years must be a positive number"),

  body("educationalBackground")
    .notEmpty()
    .withMessage("Educational background is required")
    .isString()
    .withMessage("Educational background must be a string"),

  body("cvUrl")
    .optional({ nullable: true, checkFalsy: true })
    .isURL()
    .withMessage("CV URL must be a valid URL"),

  body("medium")
    .notEmpty()
    .withMessage("Medium is required")
    .isArray({ min: 1 })
    .withMessage("Medium must be an array with at least one value"),
];

export const validateUpdateTeacherProfile = [
  body("userId")
    .notEmpty()
    .withMessage("userId is required")
    .isInt()
    .withMessage("userId must be an integer"),

  body("bio").optional().isString().withMessage("Bio must be a string"),

  body("experienceYears")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Experience years must be a positive number"),

  body("educationalBackground")
    .optional()
    .isString()
    .withMessage("Educational background must be a string"),

  body("cvUrl").optional().isURL().withMessage("CV URL must be a valid URL"),

  body("medium")
    .optional()
    .isArray({ min: 1 })
    .withMessage("Medium must be an array with at least one value"),
];
