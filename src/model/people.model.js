module.exports = People = (
    id,
    name,
    nik,
    gender,
    dob,
    pob,
    province_id,
    regency_id,
    district_id,
    create_at,
    update_at
  ) => {
    return {
      id,
      name,
      nik,
      gender,
      dob,
      pob,
      province_id,
      regency_id,
      district_id,
      create_at,
      update_at,
    };
  };