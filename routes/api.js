const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/', (req, res) => {
    res.render("App");
});

// get a list of ninjas from database
router.get('/ninjas' ,function(req,res, next){
    Ninja.geoNear(
        {
            type : "Point", cordinates : [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        {
            maxDistance : 100000, spherical : true
        }
        ).then(function(ninjas){
            res.send(ninjas);
        });   
});

// add a new ninjas to db
router.post('/ninjas' ,function(req,res,next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);   
    }).catch(next);     //if error 
});

// update a ninja in the db
router.put('/ninjas/:id' ,function(req,res,next){
    // here we r taking id from db and update it through body name(front)
    Ninja.findByIdAndUpdate({ _id: req.params.id}, req.body).then(function(ninja){   
        res.send(ninja);
    });
    res.send({type:'PUT'});
});

// delete a ninja in the db
router.delete('/ninjas/:id' ,function(req,res,next){
    Ninja.findByIdAndRemove({ _id: req.params.id}).then(function(ninja){
        Ninja.findOne({ _id: req.params.id}).then(function(ninja){
            res.send(ninja);
        })
        
    });
   
});

module.exports = router;