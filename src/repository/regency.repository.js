const DbQuery = require('../config/db.query');
const regencyDto = require('../model/dto/regency.dto');

module.exports = ProvinceRepository = (db) => {


    const list = async () => {
        try {
            
            const result = await db.query(DbQuery().SELECT_REGENCY_LIST);
            
           
            const regency = [];
            if (result.rowCount > 0) {
                for (let i = 0; i < result.rowCount; i++) {
                    regency.push(regencyDto(result, i));
                }
                return regency;

            }else{

                throw {statusCode: 404, message: 'Regency not Exist'}
            }      
        }catch(error){
            throw {statusCode: 500, message: 'Somthing went wrong!!'};
        }
    }

    const create = async (payload) => {
        try {
            
            const result = await db.query(DbQuery().INSERT_REGENCY, 
            [payload.id, payload.name,payload.province_id, new Date()]);
            if (result.rowCount > 0) {
                return regencyDto(result);
            }else{
                throw {statusCode: 400, message: 'Bad Request!!'} 
            }
            
        }catch(error){
            throw {statusCode: 500, message: 'Somthing went wrong!!'};
        }
    }

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_REGENCY_ID, [id]);
           
            if (result.rowCount > 0){
                return regencyDto(result);
            }else{
                throw {statusCode: 404, message: 'Regency not Exist'}
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