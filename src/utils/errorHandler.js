module.exports = error = (code,message ) => {
    const error = new Error(message);
    error.statusCode = code;
    return error;
}