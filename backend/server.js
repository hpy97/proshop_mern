import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;

connectDB();    // Connect to MongoDB

const app = express();

// Middleware for parsing JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing cookies
app.use(cookieParser());

// Configure CORS based on environment
// const corsOptions = {
//   origin: process.env.NODE_ENV === 'production' 
//     ? [process.env.CLIENT_URL || 'http://localhost:3000']
//     : ['http://localhost:3000', 'http://127.0.0.1:3000'],
//   credentials: true,
//   optionsSuccessStatus: 200
// };
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID }));

// Middleware for error handling
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});