const DbQuery = require('../config/db.query');
const districtDto = require('../model/dto/district.dto');

module.exports = ProvinceRepository = (db) => {


    const list = async () => {
        try {
            
            const result = await db.query(DbQuery().SELECT_DISTRICT_LIST);
            
           
            const district = [];
            if (result.rowCount > 0) {
                for (let i = 0; i < result.rowCount; i++) {
                    district.push(districtDto(result, i));
                }
                return district;

            }else{

                throw {statusCode: 404, message: 'District not Exist'}
            }      
        }catch(error){
            throw {statusCode: 500, message: 'Somthing went wrong!!'};
        }
    }

    const create = async (payload) => {
        try {
            
            
            const result = await db.query(DbQuery().INSERT_DISTRICT, 
            [payload.id, payload.name,payload.regency_id, new Date()]);
            
            if (result.rowCount > 0) {
                return districtDto(result);
            }else{
                throw {statusCode: 400, message: 'Bad Request!!'} 
            }
            
        }catch(error){
            
            throw {statusCode: 500, message: 'Somthing went wrong!!'};
        }
    }

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_DISTRICT_ID, [id]);
           
            if (result.rowCount > 0){
                return districtDto(result);
            }else{
                throw {statusCode: 404, message: 'District not Exist'}
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