module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    console.log(req, 'req')
    req.method = 'GET';
  }
  // Continue to JSON Server router
  next()
};