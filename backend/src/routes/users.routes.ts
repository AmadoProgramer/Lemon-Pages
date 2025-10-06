import { Router } from "express";
const router = Router();

// Puedes dejar esto vacío por ahora
router.get("/", (req, res) => {
  res.json({ message: "Users route working!" });
});

export default router;
