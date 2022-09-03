const Response = () => {
    const successMessage = (code, msg, data) => ({
        code: code,
        message: msg,
        data: data,
    });
    const errorMessage = (code, msg) => ({
        code: code,
        message: msg,
    });
    return {
        successMessage, errorMessage
    }
}

module.exports = Response;
