import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;

connectDB();    // Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes
app.use('/api/products', productRoutes);

// Middleware for error handling
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});