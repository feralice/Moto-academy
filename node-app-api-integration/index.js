const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;
const { json } = express;

app.use(json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/cards', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Missing required body parameter: name' });
    }
    const api = await axios.get('https://api.scryfall.com/cards/named', {
      params: {
        fuzzy: name,
      },
    });

    const response = {
      name: api.data.name,
      mana_cost: api.data.lang,
      text: api.data.text,
      image: api.data.image_uris.normal,
    };
    res.json(response);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
