import express, { RequestHandler } from 'express';
import { addCredits, createUser } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';
import { validateRequest } from '../middleware/validateRequest';
import { createUserSchema, addCreditsSchema } from '../validations/schemas';

const router = express.Router();

router.use(authMiddleware as RequestHandler);

router.post(
  '/create', 
  validateRequest(createUserSchema) as RequestHandler, 
  createUser as RequestHandler
);

router.post(
  '/credits', 
  validateRequest(addCreditsSchema) as RequestHandler, 
  addCredits as RequestHandler
);

export default router;