const User = require('../user.model');

module.exports = UserDto = (result, index = 0) => {
    return User(
        result.rows[index].id,
        result.rows[index].username,
    )
}