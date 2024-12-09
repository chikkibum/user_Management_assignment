import express, { RequestHandler, Router, Request, Response } from 'express';
import app from '../index';
import { addCredits, createUser } from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';
// import userController from '../controllers/userController';


const router: Router = express.Router();
// User management routes (protected)
router.use(authMiddleware as RequestHandler);
router.post('/create', createUser as RequestHandler );
router.post('/credits', addCredits as RequestHandler);


export default router;