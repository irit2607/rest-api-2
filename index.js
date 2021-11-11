const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const url = require('./config/mongoKey');
const Ninja = require('./models/ninja');
const app = express();

//connect to mongo
mongoose.connect(url, { useNewUrlParser :true, useUnifiedTopology :true, useFindAndModify: false, useCreateIndex : true, }).then(() => console.log("Connected !"),);


app.use(bodyParser.json());

app.use('/api', routes);

//error handling middleware
app.use(function(err, req, res, next){
    // console.log(err);
    res.status(422).send({error: err.message});
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Started on PORT : " + PORT,),);
