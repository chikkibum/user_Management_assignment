import User from '../models/User';
import { Request, Response } from 'express';
import authMiddleware from '../middleware/authMiddleware';


interface CreateUserBody {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'agent' | 'user';
  credits: number;
}

interface AddCreditsBody {
  userId: string;
  credits: number;
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role, credits } = req.body as CreateUserBody;
    const creatorUser = await User.findById((req as any).user._id);

    if (!creatorUser) {
      return res.status(404).json({ message: 'Creator user not found' });
    }

    // Check permissions
    if (role === 'admin' || 
        (role === 'agent' && creatorUser.role !== 'admin') ||
        (role === 'user' && !['admin', 'agent'].includes(creatorUser.role))) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
      credits,
      createdBy: (req as any).user._id
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      credits: user.credits
    });
  } catch (error: unknown) {
    res.status(500).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
  }
};

export const addCredits = async (req: Request, res: Response) => {
  try {
    // console.log(req.body);
    const { username, amount } = req.body;
    const user = await User.findOne({ name: username });
    // console.log(user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.credits += amount;
    await user.save();

    res.json({ message: 'Credits added successfully', credits: user.credits });
  } catch (error: unknown) {
    res.status(500).json({ message: error instanceof Error ? error.message : 'An unknown error occurred' });
  }
};