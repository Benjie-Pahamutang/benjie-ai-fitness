import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

if (!process.env.GROQ_API_KEY) {
  console.warn("⚠️ WARNING: GROQ_API_KEY is not defined in your .env file!");
}

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Dynamic model helper
async function getWorkingModel() {
  try {
    const modelsList = await groq.models.list();
    const activeModels = modelsList.data.map(m => m.id);
    
    // Priority order for models
    const preferred = [
      'llama-3.3-70b-versatile',
      'llama-3.1-8b-instant',
      'openai/gpt-oss-120b',
      'openai/gpt-oss-20b'
    ];

    const match = preferred.find(model => activeModels.includes(model));
    return match || activeModels[0] || 'llama-3.1-8b-instant';
  } catch (err) {
    console.warn("Could not fetch models automatically, using fallback:", err.message);
    return 'openai/gpt-oss-20b';
  }
}

// Proxy route for chat messages
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const modelToUse = await getWorkingModel();
    
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: modelToUse,
    });

    const reply = completion.choices[0]?.message?.content || "No response received.";
    res.json({ reply, modelUsed: modelToUse });
  } catch (error) {
    console.error('Groq API Error:', error);
    res.status(500).json({ error: 'Failed to process request', details: error.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running securely on http://127.0.0.1:${PORT}`);
});