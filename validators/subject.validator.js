import { body } from "express-validator";

export const validateCreateSubject = [
  body("name")
    .notEmpty()
    .withMessage("Subject name is required")
    .isString()
    .withMessage("Subject name must be a string"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];

export const validateUpdateSubject = [
  body("name")
    .optional()
    .isString()
    .withMessage("Subject name must be a string"),

  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
];
