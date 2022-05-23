require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// test api
app.get('/', (req, res) => {
  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'hello from api',
  });
});

// port
const PORT = process.env.PORT || 3000;

// server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
