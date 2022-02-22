const express = require('express');

//const { filterObj } = require('../util/filterObj');

const {
    getAllUsers,
    getUsersById,
    saveUser,
    updateUserPacth,
    deleteUser
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUsersById);

router.post('/', saveUser);

router.patch('/:id', updateUserPacth);

router.delete('/:id', deleteUser);

module.exports = { usersRouter: router };