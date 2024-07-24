const validator = require('validator');
const disposableDomains = require('../services/disposableDomains');

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  // Format validation, used validator because regular expressions was more error-prone
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Domain validation
  const domain = email.split('@')[1];
  if (disposableDomains.includes(domain)) {
    return res.status(400).json({ error: 'Disposable email domain not allowed' });
  }

  next();
};

module.exports = validateEmail;
