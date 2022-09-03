const District = require('../district.model');

module.exports = DistrictDto = (result, index = 0) => {
    return District(
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].regency_id,
        result.rows[index].created_at,
        result.rows[index].updated_at
    );
        
}