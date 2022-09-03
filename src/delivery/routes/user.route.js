const express = require('express');
const router = express.Router();
const UserRoute = (UserController) => {
    const {createUser, listUser, getUser, updateUser, deleteUser} = UserController();
    router.post('/', createUser);
    router.get('/', listUser);
    router.get('/:id', getUser);
    router.put('/', updateUser);
    router.delete('/:id', deleteUser);
    return router;
}
module.exports = UserRoute;
