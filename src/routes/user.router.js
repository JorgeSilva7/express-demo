import express from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:userId', getUser);

export default router;
