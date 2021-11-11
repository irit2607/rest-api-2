const express = require('express');
// const routes = require('');

const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Started on PORT : " + PORT,),);
