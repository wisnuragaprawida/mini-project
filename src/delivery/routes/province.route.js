const express = require('express');
const router = express.Router();

const provinceRoute = (ProvinceController) => {
    const {createProvince, listProvince, getProvince} = ProvinceController();
    router.post('/', createProvince);
    router.get('/', listProvince);
    router.get('/:id', getProvince);
  
    return router;
}
module.exports = provinceRoute;