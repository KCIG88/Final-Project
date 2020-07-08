const express = require('express')
// const path = require('path')
const morgan = require('morgan');
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');


const PORT = process.env.port || 8080;






const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());



 const MONGODB_URI = 'mongodb+srv://auth0-custom-db-user:Hornet94@cluster0-oidde.mongodb.net/project3?retryWrites=true&w=majority'

  mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/project3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!')
});

const Users = require("./routes/Users")
app.use('/users', Users)

// MIDDLEWARE
app.use(morgan('tiny'));
// app.use('/', routes);







// Starting Server 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})
