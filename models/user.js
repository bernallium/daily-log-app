const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt'); // For password salting and hashing

// Number of times to randomize the generation of salt
const SALT_ROUNDS = 6;

const userSchema = new Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  password: String
},{
  timestamps: true
});

// Seriliazes user document (object) into JSON while first removing the password
// ie. Password will not be visible in JSON
userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // Removes the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

// Pre-middleware ('hook') that runs before a user is saved
userSchema.pre('save', function(next) {
  // 'this' will be set to the current user document being saved
  const user = this;
  if (!user.isModified('password')) return next();
  // If password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // Replaces the user provided password with the hash
    user.password = hash;
    next();
  });
});

// Instance method
userSchema.methods.comparePassword = function(tryPassword, cb) {
  // bcrypt's compare method verifies that a cleartext password matches a given hash
  // 'this' represents the document that you called comparePassword on
  bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);