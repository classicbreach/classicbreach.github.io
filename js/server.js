import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-webhook', async (req, res) => {
  const payload = req.body;
  const webhookURL = "https://discord.com/api/webhooks/1449371050654830692/RxjhaEptKuVbeBT4_QjVj9dJrgI-02iHoKJC1NzjceZ2orW5txF7UL5ydePW-4mLijVr";

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    res.status(response.ok ? 200 : 500).json({ status: response.status });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Webhook failed' });
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));
