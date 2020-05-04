const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  password: String
},{
  timestamps: true
});

// Seriliazes user document (object) into JSON while first removing the password
userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);