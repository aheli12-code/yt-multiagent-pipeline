import express from 'express';
import { generateScript } from '../agents/agent3_script_generation/index.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { idea } = req.body;

    if (!idea || typeof idea !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid "idea" — expected a string' });
    }

    const script = await generateScript(idea);

    return res.status(200).json(script);
  } catch (err) {
    console.error('Agent 3 route error:', err);
    return res.status(500).json({ error: 'Internal server error in Agent 3' });
  }
});

export default router;