import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { AppDataSource } from "./data-source";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/users.routes";
import booksRoutes from "./routes/books.routes";
import reviewsRoutes from "./routes/reviews.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();
app.use(express.json());

// Rutas
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/books", booksRoutes);
app.use("/reviews", reviewsRoutes);

// middleware de errores al final
app.use(errorHandler);

const PORT = Number(process.env.PORT || 4000);

AppDataSource.initialize()
  .then(() => {
    console.log("🟢 DB conectada");
    app.listen(PORT, () => {
      console.log(`✅ Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("🔴 Error inicializando DB:", err);
    process.exit(1);
  });


