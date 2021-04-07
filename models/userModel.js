const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  role: {
    type: String,
    enum: ['Admin', 'Merchant', 'User'],
    default: 'User',
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
    index: { unique: true },
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: () => {
      return this.provider !== 'email' ? false : true;
    },
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  provider: {
    type: String,
    trim: true,
    required: true,
    default: 'email',
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'Merchant',
    default: null,
  },
  phoneNumber: {
    type: String,
  },
  googleId: {
    type: String,    
  },
  facebookId: {
    type: String,    
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
  },
});

module.exports = mongoose.model('User', UserSchema);
