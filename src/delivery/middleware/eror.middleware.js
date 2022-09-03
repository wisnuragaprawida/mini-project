const erorMiddleware = (err, req, res, next) => {
    console.log('yayaya');
    // if (err.name === 'ValidationError') {
    //     const errMessages = Object.values(err.errors).map(val => val.message);
    //     return res.status(400).json({
    //         code: res.statusCode,
    //         message: errMessages
    //     });
    // }
    next();
}

module.exports = erorMiddleware;