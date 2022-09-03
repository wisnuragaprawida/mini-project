const express = require('express');
const router = express.Router();

const districtRoute = (DistrictController) => {
    const {createDistrict, listDistrict, getDistrict} = DistrictController();
    router.post('/', createDistrict);
    router.get('/', listDistrict);
    router.get('/:id', getDistrict);
  
    return router;
}
module.exports = districtRoute;