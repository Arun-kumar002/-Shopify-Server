require("dotenv").config()
module.exports.config = {
    ENV: process.env.ENV,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    PORT: process.env.PORT,
    VERSION: process.env.VERSION,
    API_PREFIX: process.env.API_PREFIX,
    DEBUG: JSON.parse(process.env.DEBUG)
}

