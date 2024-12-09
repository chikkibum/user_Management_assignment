import User from '../models/User';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  });
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body as { name: string; email: string; password: string };

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      // First user will be admin, rest will be users by default
      role: (await User.countDocuments({})) === 0 ? 'admin' : 'user'
    });

  

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id as string)
    });
  } catch (error: any) {
    res.json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as { email: string; password: string };
    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id as string)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};