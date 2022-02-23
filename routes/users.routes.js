const express = require('express');

//const { filterObj } = require('../util/filterObj');

const {
    getAllUsers,
    getUserById,
    saveUsers,
    updateUserPatch,
    deleteUser
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', saveUsers);

router.patch('/:id', updateUserPatch);

router.delete('/:id', deleteUser);

module.exports = { usersRouter: router };