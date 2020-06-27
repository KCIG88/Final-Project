const express = require('express')
// const path = require('path);')
const morgan = require('morgan');
const mongoose = require('mongoose');
// const mongoose = require('mongoose');
const app = express()
const PORT = process.env.port || 8080;

const routes = require("./routes/api")

const MONGODB_URI = 'mongodb+srv://auth0-custom-db-user:Hornet94@cluster0-oidde.mongodb.net/auth0-integration?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/projec3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!')
});


// MIDDLEWARE
app.use(morgan('tiny'));
app.use('/api', routes);

//routes


// Sessions
// app.use(
//     session({
//         secret: 'Project-three', //pick a random string to make the hash that is generated secure
//         store: new MongoStore({ mongooseConnection: dbConnection }),
//         resave: false, //required
//         saveUninitialized: false //required
//     })
// )



// Starting Server 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})