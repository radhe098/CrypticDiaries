const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diarydata= new Schema({
     date:{
        type: String,
        required: true
     },
     title:{
        type: String,
        required: true
     },
     entry:{
        type: String,
        required: true
     },
     enkey:{
        type: String,
        required: true
     }
})

module.exports = mongoose.model('diarydata', diarydata);