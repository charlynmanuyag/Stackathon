const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/express-backend', (req, res, next) => {
  try {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => console.log('App listening on port', port));

module.exports = app;
