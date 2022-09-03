const People = require('../people.model');

module.exports = peopleDto = (result, index =0) => {
    return People(
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].nik,
        result.rows[index].gender,
        result.rows[index].dob,
        result.rows[index].pob,
        result.rows[index].province_id,
        result.rows[index].regency_id,
        result.rows[index].district_id,
        result.rows[index].create_at,
        result.rows[index].update_at
    )
}