module.exports = DistrictService = (DistrictRepository) =>{
    const {list,create,getById} = DistrictRepository;

    const getAllDistrict = async () => {
        try {
            return await list();
        }catch(error){
            throw error;
        }

    }

    const addDistrict = async (newDistrict) => {
        try {
            if (newDistrict.name && newDistrict.id) {
                return await create(newDistrict);
            }else{
                throw {statusCode: 400, message: 'Bad Request!!'}
            }  
        }catch(error){
            throw error;
        }
    }

    const getDistrictById = async (id) => {
        try {
            return await getById(id);
        }catch(error){
            throw error;
        }
    }

       

    return {
        getAllDistrict,addDistrict,getDistrictById
    }


}