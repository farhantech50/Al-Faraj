import { body } from "express-validator";

export const validateLookup = [
  body().isArray().withMessage("Body must be an array"),

  body("*.name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string"),

  body("*.value")
    .notEmpty()
    .withMessage("Value is required")
    .isString()
    .withMessage("Value must be a string"),
];
