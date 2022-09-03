const db = require("../config/db");


const UserService = require('./user.service');
const UserRepository = require('../repository/user.repository');
const AuthService = require('./auth.service');

const ProvinceService = require('./province.service');
const ProvinceRepository = require('../repository/province.repository');

const RegencyService = require('./regency.service');
const RegencyRepository = require('../repository/regency.repository');

const DistrictService = require('./district.service');
const DistrictRepository = require('../repository/district.repository');

const PeopleService = require('./people.service');
const PeopleRepository = require('../repository/people.repository');



const userService = (req, res, next) => {
    req.service = UserService(UserRepository(db));
    next()
}

const authService = (req, res, next) => {
    req.service = AuthService(UserService(UserRepository(db)));
    next()
}
const provinceService = (req, res, next) => {
    req.service = ProvinceService(ProvinceRepository(db));
    next()
}

const  regencyService = (req, res, next) => {
    req.service = RegencyService(RegencyRepository(db));
    next()
}

const districtService = (req, res, next) => {
    req.service = DistrictService(DistrictRepository(db));
    next()
}

const peopleService = (req, res, next) => {
    req.service = PeopleService(PeopleRepository(db));
    next()
}





const service = {
    userService,
    authService,
    provinceService,
    regencyService,
    districtService,
    peopleService
}
module.exports = service;