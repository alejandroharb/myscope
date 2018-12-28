//route specific middleware for checking if user logged in.
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!"});
  }
  // if req.user exists, continue to next middleware or request handling function.
  next();
};
