import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodSchema } from 'zod';

export const validateRequest = (schema: ZodSchema) => 
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };