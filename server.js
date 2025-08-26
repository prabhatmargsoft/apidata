const http = require('http');

const app = require('./app')
const mongodb = require('mongoose');
const { connected } = require('process');
const socketInit = require('./api/soket'); 
const server = http.createServer(app);


 mongodb.connect('mongodb+srv://pkp:123@pkp.1g6y5.mongodb.net/?retryWrites=true&w=majority&appName=pkp');
    
    mongodb.connection.on('error',err=>{
        console.log('connection failed');
    })

     mongodb.connection.on('connected',connected=>{
        console.log('connected with database');
    })

    socketInit(server); 
    server.listen(5000,console.log('app is reunnig'));
