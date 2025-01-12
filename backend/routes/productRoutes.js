import express from 'express';
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js';

// @desc Fetch all products
router.get('/', getProducts);

// @desc Fetch single product
router.get('/:id', getProductById);
 
export default router;