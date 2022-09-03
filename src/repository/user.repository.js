const DbQuery = require('../config/db.query');
const userDto = require('../model/dto/user.dto');


const {crypt, compare} = require('../utils/bcrypt.utils');



module.exports = UserRepository = (db) => {



    const create = async (payload) => {
        try {
            
       const cryptedPass = await crypt(payload.password);

            const result = await db.query(
                DbQuery().INSERT_USER,
                [
                    payload.username,
                    cryptedPass,
                ]);

            return userDto(result);

            
        } catch (err) {
            throw err.message
        }
    }

    const getUserByUsernamePassword = async (payload) => {
        try{
            console.log(payload.password);
            const result = await db.query(DbQuery().SELECT_USER, [payload.username]);
            if (result.rowCount > 0){
                console.log(result.rows[0].password);
                const comparePass = await compare(payload.password,result.rows[0].password);
                console.log(comparePass);
                // if (comparePass){
                    
                // }else{
                //     return false
                // }
            }
        }catch (err){
            throw err.message

        }
    }



    return {
        create,getUserByUsernamePassword
    }

}