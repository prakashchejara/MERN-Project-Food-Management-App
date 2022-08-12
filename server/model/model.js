const mongoose=require('mongoose');

var schema= new mongoose.Schema({
food_item:{
    type: String,
    required: true
},
ftype:{
    type: String,
    required: true
},
fstorage:{
    type: String,
    required: true
},
pdate:Date,
rdate: Date,
atime: String
})

const Fitemdb = mongoose.model('fitemdb',schema);

module.exports=Fitemdb;