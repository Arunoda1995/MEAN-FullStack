

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdUnit = new Schema({
    unit_name :{
        type:String
    },
    unit_price:{
        type:Number
    }
},{
    collection:'adunits'
});

module.exports = mongoose.model('AdUnit',AdUnit);