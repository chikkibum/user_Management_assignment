import { z } from 'zod';
import User from '../models/User';

export const signupSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .trim()
    .refine(val => /^[a-zA-Z0-9\s_-]+$/.test(val), {
      message: 'Name can only contain letters, numbers, spaces, underscores, and hyphens'
    })
    .refine(async (name) => {
      const existingUser = await User.findOne({ name });
      return !existingUser;
    }, {
      message: 'Name is already taken'
    }),
  email: z.string()
    .email('Invalid email format')
    .trim()
    .toLowerCase()
    .refine(async (email) => {
      const existingUser = await User.findOne({ email });
      return !existingUser;
    }, {
      message: 'Email is already registered'
    }),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password cannot exceed 100 characters')
    .refine(val => /[A-Z]/.test(val), {
      message: 'Password must contain at least one uppercase letter'
    })
    .refine(val => /[0-9]/.test(val), {
      message: 'Password must contain at least one number'
    }),
});

export const loginSchema = z.object({
  email: z.string()
    .email('Invalid email format')
    .trim()
    .toLowerCase(),
  password: z.string()
    .min(1, 'Password is required')
}).refine(data => data.email && data.password, {
  message: "Both email and password are required"
});

export const createUserSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .trim()
    .refine(val => /^[a-zA-Z0-9\s_-]+$/.test(val), {
      message: 'Name can only contain letters, numbers, spaces, underscores, and hyphens'
    })
    .refine(async (name) => {
      const existingUser = await User.findOne({ name });
      return !existingUser;
    }, {
      message: 'Name is already taken'
    }),
  email: z.string()
    .email('Invalid email format')
    .trim()
    .toLowerCase()
    .refine(async (email) => {
      const existingUser = await User.findOne({ email });
      return !existingUser;
    }, {
      message: 'Email is already registered'
    }),
  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password cannot exceed 100 characters')
    .refine(val => /[A-Z]/.test(val), {
      message: 'Password must contain at least one uppercase letter'
    })
    .refine(val => /[0-9]/.test(val), {
      message: 'Password must contain at least one number'
    }),
  role: z.enum(['admin', 'agent', 'user'], {
    errorMap: () => ({ message: 'Invalid role. Must be admin, agent, or user' })
  }),
  credits: z.number()
    .min(0, 'Credits cannot be negative')
    .max(1000000, 'Credits cannot exceed 1,000,000')
    .default(0),
}).refine(data => data.email && data.password && data.name, {
  message: "All fields are required"
});

export const addCreditsSchema = z.object({
  username: z.string()
    .min(1, 'Username is required')
    .max(50, 'Username cannot exceed 50 characters')
    .trim(),
  amount: z.number()
    .min(1, 'Amount must be at least 1')
    .max(1000000, 'Amount cannot exceed 1,000,000')
    .refine(val => Number.isInteger(val), {
      message: 'Amount must be a whole number'
    }),
}).refine(data => data.username && data.amount, {
  message: "Both username and amount are required"
});