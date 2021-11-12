const mongoose = require('mongoose');



// create geolocation Schema

const GeoSchema = new mongoose.Schema({
    type : {
        type : String,
        default : "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

const ninjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name field is required']
    },
    rank: {
        type: String
    },
    available : {
        type : Boolean,
        default : false
    },
    geometry : GeoSchema

    // add in geo location
});

const Ninja = mongoose.model('ninja', ninjaSchema);

module.exports = Ninja;