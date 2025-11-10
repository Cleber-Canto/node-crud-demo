const userController = require('../src/controllers/userController');

test('deve retornar um array de usuários', () => {
  const req = {};
  const res = {
    json: jest.fn()
  };

  userController.getAllUsers(req, res);

  expect(res.json).toHaveBeenCalledWith(expect.any(Array));
});
