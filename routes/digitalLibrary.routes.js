import express from "express";
import {
  createLibraryItem,
  getLibraryItems,
  updateLibraryItem,
  deleteLibraryItem,
} from "../controllers/digitalLibrary.controller.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  upload.single("file"),
  (req, res, next) => {
    /* #swagger.tags = ['Digital Library']
       #swagger.requestBody = {
         required: true,
         content: {
           "multipart/form-data": {
             schema: {
               type: "object",
               properties: {
                 title: { type: "string", example: "Algebra Notes" },
                 description: { type: "string", example: "Chapter 1 notes" },
                 file: { type: "string", format: "binary" }
               }
             }
           }
         }
       }
    */
    createLibraryItem(req, res, next);
  },
);

router.get("/", (req, res, next) => {
  /* #swagger.tags = ['Digital Library'] */
  getLibraryItems(req, res, next);
});

router.put(
  "/:id",
  protect,
  authorizeRoles("admin"),
  upload.single("file"),
  (req, res, next) => {
    /* #swagger.tags = ['Digital Library']
       #swagger.requestBody = {
         required: false,
         content: {
           "multipart/form-data": {
             schema: {
               type: "object",
               properties: {
                 title: { type: "string", example: "Updated Algebra Notes" },
                 description: { type: "string", example: "Revised notes" },
                 file: { type: "string", format: "binary" }
               }
             }
           }
         }
       }
    */
    updateLibraryItem(req, res, next);
  },
);

router.delete("/:id", protect, authorizeRoles("admin"), (req, res, next) => {
  /* #swagger.tags = ['Digital Library'] */
  deleteLibraryItem(req, res, next);
});

export default router;
