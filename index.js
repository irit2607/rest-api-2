const express = require('express');
const routes = require('./routes/api');

const app = express();

app.use('/api', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Started on PORT : " + PORT,),);
