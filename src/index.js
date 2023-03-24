const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/database');
const passport = require('passport');
const {passportAuth} = require('./config/jwt-middleware');
const app = express();
const PORT = 3000; 


const apiRoutes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
passportAuth(passport);
app.use('/api',apiRoutes);

app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`)
    await connect();
    console.log('Mongodb connected');
});