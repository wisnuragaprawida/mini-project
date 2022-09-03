module.exports = generateNik = (people) => {

    let dobContainer;
    if (people.gender.toLowerCase() == 'perempuan' || people.gender.toLowerCase() == 'wanita') {
        let dobSplit = people.dob.split('-');
        let addDate = Number(dobSplit[2]) + 40;
        let date = String(addDate);
         dobContainer = date + dobSplit[1] + dobSplit[0].substring(dobSplit.length - 1);
    }else{
        let dobSplit = people.dob.split('-');
        dobContainer = dobSplit[2] + dobSplit[1] + dobSplit[0].substring(dobSplit.length - 1);
    }
    let result = people.province_id + people.regency_id + people.district_id + dobContainer  +  people.id.substring(people.id.length - 4);

    return result;


}