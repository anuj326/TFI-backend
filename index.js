const express = require('express');
const cors = require('cors');
const db = require('./mongoose/mogooose');
const { volunteerRegister } = require('./controllers/volunteerRegister');
const { adminRegister } = require('./controllers/adminRegister');
const { adminLogin } = require('./controllers/adminLogin');
const { volunteerData } = require('./controllers/volunteerData');
const port = process.env.PORT || 8000;
const app = express();
app.use(cors({credential:true, }));
app.use(express.json());

app.get('/',function(req, res){
    res.send("Welcome to Teach for India")
})
app.post('/register', volunteerRegister);
app.post('/adminRegister' , adminRegister);
app.post('/signin', adminLogin);
app.get('/data', volunteerData);

app.listen(port ,function(err){
    if(err) throw new err;
    console.log("Express Server is Running on port: ", port);
})