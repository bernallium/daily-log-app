const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: {type: String, required: true},
    description: {type: String},
    complete: {type: Boolean, default: false},
    dateMigrated: {type: String},
    priority: {type: Number, min: 0, max: 2, default: 1, 
        validate: {validator: Number.isInteger, message: '{VALUE} is not an integer value'}},
    label: {type: String}
},
    {
        timestamps: true
    }
);  

module.exports = mongoose.model('Task', taskSchema);