import express from 'express';
import cors from 'cors';
import { portfolioData } from './data/portfolioData.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main API Route
app.get('/api/portfolio', (req, res) => {
  res.status(200).json({
    success: true,
    data: portfolioData
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});