import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { AppDataSource } from "../data-source";
const router = Router();

router.get("/me", requireAuth, async (req: any, res) => {
  const u = req.user;
  res.json({ id: u.id, name: u.name, email: u.email, bio: u.bio, avatarUrl: u.avatarUrl });
});

router.put("/me", requireAuth, async (req: any, res) => {
  const repo = AppDataSource.getRepository("User");
  const user = req.user;
  const { name, bio, avatarUrl } = req.body;
  user.name = name ?? user.name;
  user.bio = bio ?? user.bio;
  user.avatarUrl = avatarUrl ?? user.avatarUrl;
  await AppDataSource.manager.save(user);
  res.json({ ok: true, user });
});

export default router;
