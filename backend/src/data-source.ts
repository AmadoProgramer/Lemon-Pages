import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

import { User } from "./entities/User";
import { Book } from "./entities/Book";
import { Review } from "./entities/Review";
import { Like } from "./entities/Like";
import { Follow } from "./entities/Follow";
import { Notification } from "./entities/Notification";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "db",
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS || "postgres",
  database: process.env.DB_NAME || "lemonpages",
  synchronize: true, // DEV: true para crear tablas automáticamente. En prod usa migrations.
  logging: false,
  entities: [User, Book, Review, Like, Follow, Notification],
});

