const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const limiter = require('./config/rateLimiter');
const { signup, unsubscribe } = require('./controllers/signupController');
const validateEmail = require('./middleware/validateEmail');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

app.use(limiter);
app.use(bodyParser.json());

app.post('/signup', validateEmail, signup);
app.delete('/signup', validateEmail, unsubscribe);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
