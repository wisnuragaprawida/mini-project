const peopleDto = require('../model/dto/people.dto');
const DbQuery  = require('../config/db.query');
const generateNik = require('../utils/generateNik');

module.exports = peopleRepository = (db) => {


    const create = async (people) => {
        try {
            const nik = generateNik(people);
            const result = await db.query(DbQuery().INSERT_PEOPLE,
            [people.id, nik, people.name, people.gender, people.dob, people.pob, people.province_id, people.regency_id,people.district_id, new Date()]);
            if (result.rowCount > 0) {
                return peopleDto(result);
            }else{
                throw {statusCode: 400, message: 'Bad Request!!'}
            }
        }catch(error){
            throw {statusCode: error.statusCode || 500, message: error.message || 'Somthing went wrong!!'};
        }
    }

    return {
        create

    }

}