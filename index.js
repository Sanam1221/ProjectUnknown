const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const cors = require('cors')
const PORT = process.env.PORT||8080
const login = require('./routes/login') 
const verify = require('./routes/verify') 
const { json } = require('express')
const bodyParser = require("body-parser"); 
const router = require("./routes/home")
app.use(bodyParser.json());
app.use(cors())
app.use(json())
app.use('', router)
app.use('/login',login)
app.use('/verify/:id',verify)
app.listen(PORT, ()=>{
    console.log(`Server running at port http://localhost:${PORT}..`);
})