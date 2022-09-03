const AuthenticationController = () => {

    const loginAcount = async (req, res) => {
    const payload = req.body;

    const token = await req.service.login(payload);
    res.status(201).json({token: token});
    
    }

    
    return {
        loginAcount
    }


}

module.exports = AuthenticationController;  