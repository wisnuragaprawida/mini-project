module.exports = ProvinceService = (ProvinceRepository) =>{
    const {list,create,getById} = ProvinceRepository;

    const getAllProvince = async () => {
        try {
            return await list();
        }catch(error){
            throw error;
        }

    }

    const addProvince = async (newProvince) => {
        try {
            if (newProvince.name && newProvince.id) {
                return await create(newProvince);
            }else{
                throw {statusCode: 400, message: 'Bad Request!!'}
            }  
        }catch(error){
            throw error;
        }
    }

    const getProvinceById = async (id) => {
        try {
            return await getById(id);
        }catch(error){
            throw error;
        }
    }

       

    return {
        getAllProvince,addProvince,getProvinceById
    }


}