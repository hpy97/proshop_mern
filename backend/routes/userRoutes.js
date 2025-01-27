import express from 'express';
const router = express.Router();

import { authUser, getUserProfile, logoutUser, registerUser, getUsers, updateUserProfile, getUserById, deleteUser, updateUser  } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// login & logout routes
router.post('/login', authUser);
router.post('/logout', logoutUser);

// register route
router.route('/').post(registerUser).get(protect, admin, getUsers);

// profile route
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').get(protect, admin, getUserById).delete(protect, admin, deleteUser).put(protect, admin, updateUser);

export default router;
