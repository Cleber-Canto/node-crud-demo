const users = require('../models/user');

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);
  if (index !== -1) {
    users.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
};
