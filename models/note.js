const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {type: String},
    note: {type: String, required: true},
    date: [{type: String, required: true}],
    label: {type: String}
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Task', taskSchema);