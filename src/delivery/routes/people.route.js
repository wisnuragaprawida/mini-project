const express = require('express');
const router = express.Router();

const peopleRoute = (PeopleController) => {
    const {createPeople, getPeople, searchPeople} = PeopleController();
    router.post('/', createPeople);
    router.get('/', getPeople);
    router.get('/search', searchPeople);
  
    return router;
}
module.exports = peopleRoute;