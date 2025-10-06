import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Book } from "../entities/Book";
import { requireAuth } from "../middleware/auth.middleware";

const router = Router();

// Crear libro (protected)
router.post("/", requireAuth, async (req: any, res) => {
  const repo = AppDataSource.getRepository(Book);
  const books = repo.create(req.body as Book[]);

  if (req.user) {
    books.forEach((book: Book) => (book.createdBy = req.user));
  }

  await repo.save(books);

  res.status(201).json(books);
});

// Listar libros
router.get("/", async (req, res) => {
  const repo = AppDataSource.getRepository(Book);
  const items = await repo.find({ take: 50, order: { createdAt: "DESC" } });
  res.json(items);
});

export default router;
