import express from "express";
import {
  createBook,
  deleteBook,
  getBooks,
  updateBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/books", getBooks);
router.post("/book", createBook);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

export default router;
