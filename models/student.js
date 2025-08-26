const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:String,
    gender:String
})

module.exports = mongoose.model('Student',studentSchema);