import express from 'express';
import {protect} from '../middleware/authMiddleware.js'
import { registerUser, authUser, logoutUser, getUser, updateUser, sendMessage } from '../controllers/useControllers.js';

const router = express.Router();

router.post('/', registerUser);

router.post('/auth', authUser);

router.post('/logout', logoutUser);

router.route('/profile').get(protect, getUser).put(protect, updateUser);

router.post('/message', protect, sendMessage);


export default router;