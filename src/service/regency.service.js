module.exports = RegencyService = (RegencyRepository) =>{
    const {list,create,getById} = RegencyRepository;

    const getAllRegency = async () => {
        try {
            return await list();
        }catch(error){
            throw error;
        }

    }

    const addRegency = async (newRegency) => {
        try {
            if (newRegency.name && newRegency.id) {
                return await create(newRegency);
            }else{
                throw {statusCode: 400, message: 'Bad Request!!'}
            }  
        }catch(error){
            throw error;
        }
    }

    const getRegencyById = async (id) => {
        try {
            return await getById(id);
        }catch(error){
            throw error;
        }
    }

       

    return {
        getAllRegency,addRegency,getRegencyById
    }


}