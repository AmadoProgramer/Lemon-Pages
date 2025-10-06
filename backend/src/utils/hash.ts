import bcrypt from "bcrypt";
const rounds = Number(process.env.BCRYPT_SALT_ROUNDS || 12);

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, rounds);
}

export async function comparePassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
