const routeNotFound = (req, res, next) => {
  res.status(404).json({ msg: 'route not found' });
};

export default routeNotFound;
