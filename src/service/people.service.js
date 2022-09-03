module.exports = peopleService = (PeopleRepository) => {

    const addPeople = async (people) => {
        try {
            return await PeopleRepository.create(people);
        }catch(error){
            throw error;
        }
    }
    



    return {
        addPeople
    }
}