

module.exports = UserService = (UserRepository) => {

    const {create,list, getById,update,remove,getUserByUsernamePassword } = UserRepository;

    const findAllUser = async (keyword) => {
      

        try {

            if (keyword) {
                return await list(keyword);
            }                
            return await list();
        } catch (err) {
            return err.message
        }
    }

    const registerUser = async (newUser) => {
        try {
            return await create(newUser);
        } catch (err) {
            throw err
        }
    }
    const registerAdmin = async () => {
        try {
            const admin = {
                username:'admin',
                password:'password'
            }
            return await create(admin);
        } catch (err) {
            throw err
        }
    }
    const getUserById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message
        }
    }
    const updateUser = async (payload) => {
        try {
            return await update(payload);
        } catch (err) {
            return err.message
        }
    }
    const removeUser = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            throw err
        }
    }
    const validationUser = async (payload) => {
        try {
            return await getUserByUsernamePassword(payload);
        } catch (err) {
            throw err
        }
    }
    return {
        findAllUser,registerUser,getUserById,updateUser,removeUser,validationUser,registerAdmin
    }



}