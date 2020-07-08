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




const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://auth0-custom-db-user:Hornet94@cluster0-oidde.mongodb.net/auth0-integration?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
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
