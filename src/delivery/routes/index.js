const express = require('express');

const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const provinceRouter = require('./province.route');
const regencyRouter = require('./regency.route');
const districtRouter = require('./district.route');
const peopleRouter = require('./people.route');


const { UserController,AuthenticationController,ProvinceController,RegencyController,DistrictController, PeopleController} = require('../controller');
const router = express.Router();

const service = require('../../service/index');




router.get('/init', service.userService, UserController().createUserAdmin);

// router.use('/user',   service.userService, userRouter(UserController));
// router.use('/auth', service.authService, authRouter(AuthenticationController));
router.use('/province', service.provinceService, provinceRouter(ProvinceController));
router.use('/regency', service.regencyService, regencyRouter(RegencyController));
router.use('/district', service.districtService, districtRouter(DistrictController));
router.use('/people', service.peopleService, peopleRouter(PeopleController));

module.exports = router;

