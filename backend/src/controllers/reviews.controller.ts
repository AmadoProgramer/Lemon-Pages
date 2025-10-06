import { Request, Response } from "express";

export const getAllReviews = async (req: Request, res: Response) => {
  return res.json({ message: "List of reviews" });
};

export const createReview = async (req: Request, res: Response) => {
  return res.json({ message: "Review created" });
};
