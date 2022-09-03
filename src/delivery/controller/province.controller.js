const Response = require('../../utils/response');

module.exports = ProvinceController = () =>{

        const listProvince = async (req, res) => {
            try {

                const province = await req.service.getAllProvince();
                
                return res.status(200).json(Response().successMessage(res.statusCode, 'Success', province));
            }catch(error){

                return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
            }

        }

        const createProvince = async (req, res) => {
            try {
                const payload = req.body;
                const newProvince = await req.service.addProvince(payload);
                return res.status(201).json(Response().successMessage(res.statusCode, 'Success', newProvince));
            }catch(error){
                return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
            }
        }

        const getProvince = async (req, res) => {
            try {
                const province = await req.service.getProvinceById(req.params.id);

                return res.status(200).json(Response().successMessage(res.statusCode, 'Success', province));
            }catch(error){  
                return res.status(error.statusCode).json(Response().errorMessage(error.statusCode, error.message));
            }
        }


        return {

            listProvince,
            createProvince,
            getProvince

        }

}