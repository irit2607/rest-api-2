const { Router } = require('express');
const express = require('express');
const router = express.Router();

// get a list of ninjas from database
router.get('/ninjas' ,function(req,res){
    res.send({type : 'GET'});
});

// add a new ninjas to db
router.post('/ninjas' ,function(req,res){
    console.log(req.body);
    res.send({
        type:'POST',
        name:req.body.name,
        rank : req.body.rank
    });
});

// update a ninja in the db
router.put('/ninjas/:id' ,function(req,res){
    res.send({type:'PUT'});
});

// delete a ninja in the db
router.delete('/ninjas/:id' ,function(req,res){
    res.send({type:'DELETE'});
});

module.exports = router;