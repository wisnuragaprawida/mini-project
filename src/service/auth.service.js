module.exports = AuthService = (UserService) =>{

    const {validationUser,registerAdmin} = UserService;
    const login = async (payload) => {
       const isExist =  await validationUser(payload);
    }

  

return {
    login
}

}