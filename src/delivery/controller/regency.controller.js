const Response = require('../../utils/response');

module.exports = RegencyController = () =>{

        const listRegency = async (req, res) => {
            try {

                const regency = await req.service.getAllRegency();
                
                return res.status(200).json(Response().successMessage(res.statusCode, 'Success', regency));
            }catch(error){

                return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
            }

        }

        const createRegency = async (req, res) => {
            try {
                const payload = req.body;
                const newRegency = await req.service.addRegency(payload);
                return res.status(201).json(Response().successMessage(res.statusCode, 'Success', newRegency));
            }catch(error){
                return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
            }
        }

        const getRegency = async (req, res) => {
            try {
                const regency = await req.service.getRegencyById(req.params.id);

                return res.status(200).json(Response().successMessage(res.statusCode, 'Success', regency));
            }catch(error){  
                return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
            }
        }


        return {

            listRegency,
            createRegency,
            getRegency

        }

}