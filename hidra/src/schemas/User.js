const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  id: String,
  email: String,
  username: String,
  password: String,
});

UserSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password')) next();

  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password);
  },
}

UserSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, '9d1ada2185b97c00951319bd9a6936f5', { expiresIn: 3500 })
  }
}

const User = mongoose.model('User', UserSchema);


module.exports = User;