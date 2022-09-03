const DbQuery = require('../config/db.query');
const provinceDto = require('../model/dto/province.dto');

module.exports = ProvinceRepository = (db) => {


    const list = async () => {
        try {
            const result = await db.query(DbQuery().SELECT_PROVINCE_LIST);
           
            const provinces = [];
            if (result.rowCount > 0) {
                for (let i = 0; i < result.rowCount; i++) {
                    provinces.push(provinceDto(result, i));
                }
                return provinces;

            }else{

                throw {statusCode: 404, message: 'Province not Exist'}
            }      
        }catch(error){
            throw {statusCode: 500, message: 'Somthing went wrong!!'};
        }
    }

    const create = async (payload) => {
        try {
            
            const result = await db.query(DbQuery().INSERT_PROVINCE, 
            [payload.id, payload.name, new Date()]);
            if (result.rowCount > 0) {
                return provinceDto(result);
            }else{
                throw {statusCode: 400, message: 'Bad Request!!'} 
            }
            
        }catch(error){
            throw {statusCode: 500, message: 'Somthing went wrong!!'};
        }
    }

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_PROVINCE_ID, [id]);
           
            if (result.rowCount > 0){
                return provinceDto(result);
            }else{
                throw {statusCode: 404, message: 'Province not Exist'}
            }
        }catch(error){
           
                throw {statusCode: error.statusCode || 500, message: error.message || 'Somthing went wrong !!'};
            
        }
    }

    return{
        list,
        create,
        getById
    }


}