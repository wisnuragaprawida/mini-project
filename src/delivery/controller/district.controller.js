const Response = require('../../utils/response');

module.exports = DistrictController = () =>{

        const listDistrict = async (req, res) => {
            try {

                const district = await req.service.getAllDistrict();
                
                return res.status(200).json(Response().successMessage(res.statusCode, 'Success', district));
            }catch(error){

                return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
            }

        }

        const createDistrict = async (req, res) => {
            try {
                const payload = req.body;
                const newDistrict = await req.service.addDistrict(payload);
                return res.status(201).json(Response().successMessage(res.statusCode, 'Success', newDistrict));
            }catch(error){
                return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
            }
        }

        const getDistrict = async (req, res) => {
            try {
                const district = await req.service.getDistrictById(req.params.id);

                return res.status(200).json(Response().successMessage(res.statusCode, 'Success', district));
            }catch(error){  
                return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
            }
        }


        return {

            listDistrict,
            createDistrict,
            getDistrict

        }

}