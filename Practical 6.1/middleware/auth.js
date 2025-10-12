const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing or invalid token format' });
  }
  
  const token = authHeader.split(' ')[1];

  const VALID_TOKEN = "mySecretToken123"; 

  if (token === VALID_TOKEN) {
    next(); 
  } else {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = auth;
