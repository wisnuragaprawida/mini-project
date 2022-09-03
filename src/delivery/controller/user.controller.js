const Response = require('../../utils/response');

module.exports = UserController = () => {


    const createUserAdmin = async (req, res) => {
        try {
            
            const user = await req.service.registerAdmin();
            res.status(201).json(Response().successMessage(res.statusCode,'SUCCESS',user));
        } catch (error) {
            res.json(Response().errorMessage('400', error));
        }

    }
        

    // const listUser = async (req, res) => {
    //     try {
    //         if (req.query.username) {
    //         const users = await req.service.findAllUser(req.query.username);
    //         res.json(Response().successMessage(res.statusCode,'SUCCESS', users));
    //         }else{
    //             const users = await req.service.findAllUser();
    //             res.json(Response().successMessage(res.statusCode,'SUCCESS', users));
    //         }
            
            
    //     } catch (err) {
    //         res.json(Response().errorMessage('400', err.message));
    //     }
    // }

    // const createUser = async (req, res) => {
    //     try {
    //         const payload = req.body;
    //         const newUser = await req.service.registerUser(payload);
    //         res.json(Response().successMessage(res.statusCode, 'SUCCESS', newUser));
    //     } catch (err) {
    //         console.log(err);
    //         res.json(Response().errorMessage('400', err));
    //     }
    // }

    // const getUser = async (req, res) => {
    //     try {
    //         const user = await req.service.getUserById(req.params.id);
    //         if (user) {                
    //             res.json(Response().successMessage(res.statusCode, 'SUCCESS', user));
    //         }else{
    //             res.status(404).json(Response().errorMessage('404', 'User not found'));
    //         }
    //     } catch (err) {
    //         res.json(Response().errorMessage('400', err.message));
    //     }
    // }
    // const updateUser = async (req, res) => {
    //     try {
    //         const payload = req.body;
    //         const user = await req.service.updateUser(payload);
    //         res.json(Response().successMessage(res.statusCode, 'SUCCESS', user));
    //     } catch (err) {
    //         res.json(Response().errorMessage('400', err.message));
    //     }
    // }

    // const deleteUser = async (req, res) => {
    //     try {
    //         const user = await req.service.removeUser(req.params.id);
    //         if (user) {
    //             res.json(Response().successMessage(res.statusCode, 'SUCCESS', user));
    //         }else{
    //             res.status(404).json(Response().errorMessage('404', 'User not found'));
    //         }
            
    //     } catch (err) {
    //         res.json(Response().errorMessage('400', err.message));
    //     }
    // }

    return {
        createUserAdmin
    }

}