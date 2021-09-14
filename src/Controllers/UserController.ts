import { Request, Response } from "express";
import { createUserDb } from "../Services/UserServices";

export async function createUser(
  req: Request,
  res: Response
): Promise<Response> {
  const newUser = await createUserDb(req.body);

  return res.json({
    message: `Welcome to Cars-api, ${newUser.name}`,
    newUser,
  });
}
