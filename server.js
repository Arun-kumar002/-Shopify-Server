const express = require('express')
const { connectDb } = require('./utils/connect')
const { config } = require('./utils/config')
connectDb();
const app = express()

/*All Other Middlewares*/
app.use(express.json({ limit: "50mb" }));

/*
    Routes Middlewares
*/
const userRoutes = require('./api/user/user.routes')
const productRouts = require('./api/product/product.routes')

app.use(config.API_PREFIX + config.VERSION + '/user', userRoutes);
app.use(config.API_PREFIX + config.VERSION + '/product', productRouts);


app.listen(config.PORT, async _ => {
    console.log(`App listening on port ${config.PORT}`);
})

