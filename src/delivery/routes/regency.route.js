const express = require('express');
const router = express.Router();

const regencyRoute = (RegencyController) => {
    const {createRegency, listRegency, getRegency} = RegencyController();
    router.post('/', createRegency);
    router.get('/', listRegency);
    router.get('/:id', getRegency);
  
    return router;
}
module.exports = regencyRoute;