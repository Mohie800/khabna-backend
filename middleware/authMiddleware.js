const jwt = require("jsonwebtoken");

const secretKey = process.env.TOKEN_KEY;

const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header("Authorization");
  console.log(req.header("Authorization"));

  // Check if the token is present
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded payload to the request for further use
    req.user = decoded;

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    // Token is invalid
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

module.exports = authMiddleware;
