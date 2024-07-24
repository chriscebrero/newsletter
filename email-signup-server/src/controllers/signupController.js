const assessRisk = require('../services/riskAssessment');

const cache = {}; // In-memory cache
const requestCache = {};

const signup = async (req, res) => {
  const { email } = req.body;

  if (requestCache[email]) {
    return res.status(429).json({ error: 'Too many requests, please try again later.' });
  }
  requestCache[email] = true;
  setTimeout(() => { delete requestCache[email]; }, 5000);

  try {
    // Check cache for existing risk assessment result
    if (cache[email]) {
      return res.status(200).json({ message: 'Email accepted', riskAssessment: cache[email] });
    }

    // Risk assessment
    const riskAssessment = await assessRisk(email);
    if (riskAssessment.data.status === 'invalid') {
      return res.status(400).json({ error: 'Email is invalid' });
    }

    // Cache the risk assessment result
    cache[email] = riskAssessment;

    res.status(200).json({ message: 'Email accepted', riskAssessment });
  } catch (err) {
    console.error('Error during signup process', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const unsubscribe = async (req, res) => {
  const { email } = req.body;

  try {
    // Remove email from cache
    delete cache[email];
    res.status(200).json({ message: `Unsubscribed with ${email}` });
  } catch (err) {
    console.error('Error during unsubscribe process', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { signup, unsubscribe };
