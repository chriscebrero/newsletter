const axios = require('axios');

const API_KEY = "de80c9d20af41217a936a0b47a2e532d5b3102d6"
// Mock function for risk assessment (replace with actual API call if needed)
const assessRisk = async (email) => {
  // Replace with actual risk assessment service integration
  // Example: using Hunter.io
  const response = await axios.get(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${API_KEY}`);
  return response.data;
};

module.exports = assessRisk;
