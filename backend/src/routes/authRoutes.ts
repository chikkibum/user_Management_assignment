import express, { RequestHandler } from 'express';
import { login, signup } from '../controllers/authController';
import { validateRequest } from '../middleware/validateRequest';
import { loginSchema, signupSchema } from '../validations/schemas';

const router = express.Router();

router.post(
  '/signup', 
  validateRequest(signupSchema) as RequestHandler, 
  signup as RequestHandler
);

router.post(
  '/login', 
  validateRequest(loginSchema) as RequestHandler, 
  login as RequestHandler
);

export default router;