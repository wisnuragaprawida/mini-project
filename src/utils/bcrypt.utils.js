const bcrypt = require('bcrypt');
const saltRounds = 10;


const crypt = async (password) => {
    return await bcrypt.hash(password, saltRounds);
}

const compare = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

module.exports = { crypt, compare };