import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET || "dev_secret";

export function signJwt(payload: object, expiresIn = process.env.JWT_EXPIRES_IN || "7d") {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });
}

export function verifyJwt(token: string) {
  return jwt.verify(token, secret);
}
