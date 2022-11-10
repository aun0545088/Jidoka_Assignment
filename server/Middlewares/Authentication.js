const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  if (!req.headers.authentication) {
    return res.send("Please login again");
  }
  const user_token = req.headers.authentication.split(" ")[1];
  jwt.verify(user_token, "shhhhh", function (err, decoded) {
    if (err) {
      return res.send("Please login again");
    }
    // console.log(decoded);
    req.body.email = decoded.email;
    req.body.userId = decoded.userId;
    next();
  });
};

module.exports = authentication;