const { config } = require('./config');
const sequelize = require('sequelize')
const postgres = {
    client: new sequelize({
        username: config.DB_USERNAME,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,
        host: config.DB_HOST,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        logging: config.DEBUG ? true : false
    })
}

const connectDb = async () => {
    try {
        await postgres.client.authenticate();
        console.log('DB connection established successfully');
    } catch (error) {
        console.log('unable to connect', error);
    }
}

module.exports = { connectDb, postgres }