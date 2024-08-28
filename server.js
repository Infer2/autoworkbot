// server.js
import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
const BOT_TOKEN = process.env.token2;
const API_URL = "https://discord.com/api/v10";

app.use(express.json());

app.post('/interactions', async (req, res) => {
  const { type, data, id, token } = req.body;

  if (type === 1) {
    // Respond to the ping interaction with a pong
    return res.json({ type: 1 });
  }

  if (type === 2) {
    // Handle the slash command interaction
    if (data.name === 'ping') {
      try {
        await axios.post(
          `${API_URL}/interactions/${id}/${token}/callback`,
          {
            type: 4,
            data: {
              content: 'Pong!',
            },
          },
          {
            headers: {
              Authorization: `Bot ${BOT_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('Response sent');
      } catch (error) {
        console.error('Error responding to interaction:', error.response ? error.response.data : error.message);
      }
    }
    return res.sendStatus(200);
  }

  return res.sendStatus(400); // For other types or errors
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
