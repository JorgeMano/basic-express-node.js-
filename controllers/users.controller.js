const { filterObj } = require('../util/filterObj');

const users = [
    { id: 1, name: 'Jorge', age: 27 },
    { id: 2, name: 'Luis', age: 29 },
    { id: 3, name: 'Pamela', age: 25 },
];
//Get all users

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            users
        }
    })
}

//Get users by id
exports.getUserById = (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === +id);

    if (!user) {
        res.status(404).json({
            status: 'error',
            message: 'No user found with the given ID',
        });
        return;
    }

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })
}

//Save users to databas
exports.saveUsers = (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        res.status(400).json({
            status: 'error',
            message: ' Must provide a valid name and an age',
        })
    }
    const newUser = {
        id: Math.floor(Math.random() * 100),
        name,
        age,
    };

    user.push(newUser);
    res.status(200).json({
        status: 'success',
        data: { newUser },
    })
}

//Update user (patch)
exports.updateUserPatch = (req, res) => {
    const { id } = req.params;
    const data = filterObj(req.body, 'name', 'age');
    const userIndex = users.findIndex(user => user.id === +id)

    if (userIndex === -1) {
        res.status(404).json({
            status: 'error',
            message: 'Cant update user, invalid ID',
        });
        return;
    }

    let updateUser = users[userIndex];
    updateUser = {...updateUser, ...data };
    users[userIndex] = updateUser;
    res.status(204).json({ status: 'success' });
}

//Delete user
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === +id);
    if (userIndex === -1) {
        res.status(404).json({
            status: 'error',
            message: 'Cant delete user, invalid ID',
        });
        return;
    }
    users.splice(userIndex, 1);
    res.status(204).json({
        status: 'success',
    })

}
