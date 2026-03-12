import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true
  },
  username: {
    type: String,
    required: [true, 'username is required']
  },
  firstName: String,
  lastName: String,
  profileImageUrl: String,
  provider: {
    type: String,
    enum: ['google', 'github', 'facebook'],
    required: [true, 'Provider Is Required']
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.User || mongoose.model('User', UserSchema);