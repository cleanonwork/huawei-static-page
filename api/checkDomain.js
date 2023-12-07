// /api/checkDomain.js

module.exports = async (req, res) => {
  const { name, suffix } = req.query;
  const apiUrl = `https://whois.freeaiapi.xyz/?name=${name}&suffix=${suffix}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
};

