import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import agent3Routes from './routes/agent3Routes.js';

// Load env vars
dotenv.config({ path: '../.env' });

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Yt Agent Pipeline API is running!' });
});

// Routes
app.use('/api/agent3', agent3Routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});