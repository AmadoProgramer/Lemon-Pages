import { Router } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { hashPassword, comparePassword } from "../utils/hash";
import { signJwt } from "../utils/jwt";

const router = Router();

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "email and password required" });

  const repo = AppDataSource.getRepository(User);
  const existing = await repo.findOneBy({ email });
  if (existing) return res.status(409).json({ message: "Email already in use" });

  const passwordHash = await hashPassword(password);
  const user = repo.create({ name, email, passwordHash });
  await repo.save(user);

  const token = signJwt({ sub: user.id });
  res.status(201).json({ token, user: { id: user.id, email: user.email, name: user.name } });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "email and password required" });

  const repo = AppDataSource.getRepository(User);
  const user = await repo.findOneBy({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await comparePassword(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = signJwt({ sub: user.id });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
});

export default router;
