const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express();
const productsRoutes = require('./routes/products');
// database connection
mongoose.connect(process.env.MONGO_URL)
 .then(() => console.log('database connected'))
 .catch((err) => console.log('database not connected', err))

//  middleware
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes'))
app.use('/products', productsRoutes);

const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`))