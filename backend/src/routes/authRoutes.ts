import express, { RequestHandler } from 'express';
import { login } from '../controllers/authController';
import { signup } from '../controllers/authController';
const router = express.Router();
const authController = require('../controllers/authController');

// Authentication routes
router.post('/signup', signup as RequestHandler);
router.post('/login', login as RequestHandler);

export default router;