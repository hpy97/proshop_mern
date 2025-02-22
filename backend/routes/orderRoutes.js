import express from 'express';
const router = express.Router();

import { getMyOrders, getOrderById, getOrders, addOrderItems, updateOrderToDelivered, updateOrderToPaid } from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').get(protect, updateOrderToPaid)
router.route('/:id/deliver').get(protect, admin, updateOrderToDelivered);

export default router;
