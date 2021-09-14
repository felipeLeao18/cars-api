import User from "../Models/User";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../Config/Auth";

class LoginController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const isUser = await User.findOne({ email });
    if (!isUser) throw new Error("Check data and try again");

    const isPasswordMatched = await bcrypt.compare(password, isUser.password);
    if (!isPasswordMatched) throw new Error("Invalid Password");

    return res.status(200).json({
      user: {
        name: isUser.name,
        email: isUser.email,
      },
      token: jwt.sign({ id: isUser._id }, config.secret, {
        expiresIn: config.expireIn,
      }),
    });
  }
}

export {LoginController}
