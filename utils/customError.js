
const HTTPErrorCodes = {
    ENTITY_NOT_FOUND: 401,
    ENTITY_ALREADY_EXISTS: 401,
    ENTITY_ID_INVALID: 407,
    MANDATORY_FIELDS_ERROR: 400,
    VALIDATION_ERROR: 400,
};


const errorCodes = {
    ENTITY_NOT_FOUND: 101,
    CREDENTIAL_MISSMATCH: 102,
    ENTITY_ALREADY_EXISTS: 103,
    MONGO_ID_INVALID: 104,
    ENTITY_ID_INVALID: 106,
    MANDATORY_FIELDS_ERROR: 107,
    VALIDATION_ERROR: 108,
};

class BaseError extends Error {
    errorCode;
    tag;
    constructor(errorCode, message, tag) {
        super();
        this.message = message;
        this.errorCode = errorCode;
        this.tag = tag

    }
}



class MandatoryFieldsError extends BaseError {
    constructor(message, tag) {
        super(errorCodes.MANDATORY_FIELDS_ERROR, message, tag);
    }
}
class EntityNotFoundError extends BaseError {
    constructor(message, tag) {
        super(errorCodes.ENTITY_NOT_FOUND, message, tag);
    }
}

class NetWorkError extends BaseError {
    constructor(message, errorCode, tag) {
        super(errorCode, message, tag);

    }
}

class EntityExistsError extends BaseError {
    constructor(message, tag) {
        super(errorCodes.ENTITY_ALREADY_EXISTS, message, tag);
    }
}

class ValidationError extends BaseError {
    constructor(message, tag) {
        super(errorCodes.VALIDATION_ERROR, message, tag);
    }
}
class MongoIdInvalidError extends BaseError {
    constructor(id) {
        super(errorCodes.MONGO_ID_INVALID, `MongoId invalid..id=${id}`);
    }
}



const handleError = (error, tag, req, res) => {
    console.log(`[handlerError]:${tag} uuid=${req.uuid} path-${req.path}, Errorclass:${error.name}:${error.message}. ${error.stack}. params - ${JSON.stringify(req.params)},body -${JSON.stringify(req.body)}, query -${JSON.stringify(req.query)}`);


    if (error instanceof BaseError && error.errorCode === 101) {
        res.status(HTTPErrorCodes.ENTITY_NOT_FOUND).json({ message: error.message || "Entity not found", status: "error", error: true });
        return
    }


    if (error instanceof BaseError && error.errorCode === 103) {
        res.status(HTTPErrorCodes.ENTITY_ALREADY_EXISTS).json({ message: error.message || "Entity already exist", status: "error", error: true });
        return
    }

    if (error instanceof BaseError && error.errorCode === 107) {
        res.status(HTTPErrorCodes.MANDATORY_FIELDS_ERROR).json({ message: error.message || "Fill all mandatory fields", status: "error", error: true });
        return
    }

    if (error instanceof BaseError && error.errorCode == 108) {
        res.status(HTTPErrorCodes.VALIDATION_ERROR).json({ message: error.message || 'validation failed', status: "error", error: true });
        return
    }
    res.status(500).json({ message: error.message ? error.message : 'internal server error', status: 'error', error: true })
    return

};



module.exports = {
    BaseError,
    EntityExistsError,
    EntityNotFoundError,
    MandatoryFieldsError,
    MongoIdInvalidError,
    NetWorkError,
    ValidationError,
    handleError
}