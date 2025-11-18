const express = require('express');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./auth-middleware');
const { randomUUID } = require('crypto');

const app = express();
app.use(express.json());

const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, 'your_secret_key', { expiresIn: '1h' });
};

app.post('/login', (req, res) => {
  const { username } = req.body;

  const user = { id: randomUUID() , username };

  const token = generateToken(user);
  res.json({ token });
});

app.get('/protected', authMiddleware, (req, res) => {
  res.json({
    message: 'This is a protected route',
    user: req.user,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
