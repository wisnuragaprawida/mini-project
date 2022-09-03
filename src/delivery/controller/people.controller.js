const Response = require('../../utils/response');


module.exports = PeopleController = () => {

    const createPeople = async (req,res) => {
        try {
            const people = await req.service.addPeople(req.body);
            return res.status(201).json(Response().successMessage(res.statusCode, 'Success', people));
        }catch(error){
            return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
        }
    }

    const getPeople = async (req,res) => {
        try {
            const id = req.params.id;
            const people = await req.service.getPeopleById(id);
            return res.status(200).json(Response().successMessage(res.statusCode, 'Success', people));
        }catch(error){
            return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
        }
    }

    const searchPeople = async (req,res) => {
        try {
            const search = {
                province : req.query.province,
                regency : req.query.regency,
                district : req.query.district
            }

            const people = await req.service.searchPeople(search);
            return res.status(200).json(Response().successMessage(res.statusCode, 'Success', people));
        }catch(error){
            return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
        }
    }
           







    return {
        createPeople,
        getPeople,
        searchPeople

    }

}