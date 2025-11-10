const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const logger = require('../utils/logger');

router.get('/', async (req, res) => {
  try {
    const users = await userController.getAllUsers();
    res.json(users);
  } catch (error) {
    logger.error('Erro ao buscar usuários', { error });
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = await userController.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    logger.error('Erro ao criar usuário', { error });
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await userController.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    logger.error('Erro ao deletar usuário', { error });
    res.status(500).json({ message: 'Erro ao deletar usuário' });
  }
});

module.exports = router;
