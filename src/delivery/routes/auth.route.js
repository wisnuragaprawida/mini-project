const express = require('express');
const router = express.Router();
const UserRoute = (AuthController) => {
    const {loginAcount} = AuthController();
    router.post('/login', loginAcount);
    
    return router;
}
module.exports = UserRoute;