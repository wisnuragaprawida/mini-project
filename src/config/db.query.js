const DbQuery = () => {
   
    const INSERT_USER = `INSERT INTO users (username,password) VALUES ($1, $2) RETURNING *`;
    const SELECT_USER = `SELECT id,username,email,password from users where username = $1`;
    const SELECT_USER_LIST = `SELECT id,username,email from users order by id desc`;
    const SELECT_USER_ID = `SELECT id,username,email from users where id = $1`;
    const SELECT_USER_USERNAME = `SELECT id,username,email from users where username ilike $1`;
    const UPDATE_USER = `UPDATE users set username = $1,email = $2,password = $3 where id=$4 RETURNING *`;
    const DELETE_USER = `DELETE FROM users where id=$1`;

    const SELECT_PROVINCE_LIST = `SELECT * FROM province`;
    const INSERT_PROVINCE = `INSERT INTO province (id,name,created_at) VALUES ($1, $2,$3) RETURNING *`;
    const SELECT_PROVINCE_ID = `SELECT * FROM province where id = $1`;

    const SELECT_REGENCY_LIST = `SELECT * FROM regency`;
    const INSERT_REGENCY = `INSERT INTO regency (id,name,province_id,created_at) VALUES ($1, $2,$3,$4) RETURNING *`;
    const SELECT_REGENCY_ID = `SELECT * FROM regency where id = $1`;
    
    const SELECT_DISTRICT_LIST = `SELECT * FROM district`;
    const INSERT_DISTRICT = `INSERT INTO district (id,name,regency_id,created_at) VALUES ($1, $2,$3,$4) RETURNING *`;
    const SELECT_DISTRICT_ID = `SELECT * FROM district where id = $1`;

    const INSERT_PEOPLE = `INSERT INTO people (id,nik, name, gender, dob, pob, province_id, regency_id, district_id, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
    return {
       
        INSERT_USER,
        SELECT_USER_LIST,
        SELECT_USER_ID,
        SELECT_USER_USERNAME,
        UPDATE_USER,
        DELETE_USER,
        SELECT_USER,

        SELECT_PROVINCE_LIST,
        INSERT_PROVINCE,
        SELECT_PROVINCE_ID,

        SELECT_REGENCY_LIST,
        INSERT_REGENCY,
        SELECT_REGENCY_ID,

        SELECT_DISTRICT_LIST,
        INSERT_DISTRICT,
        SELECT_DISTRICT_ID,

        INSERT_PEOPLE


    }
}

module.exports = DbQuery
