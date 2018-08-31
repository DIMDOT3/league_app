const express = require('express');
const app = express();

// CONFIG
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8081;

app.get('/', (req,res) => {
  res.send('Home Page');
})

app.listen(PORT, () => console.log('server started'));
