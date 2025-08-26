const expess = require('express');
const app = expess();

const studentRoute = require('./api/routes/students');
const facultyRoute = require('./api/routes/faculty');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/students',studentRoute);
app.use('/faculty',facultyRoute);




app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request'
    })
})

module.exports = app;