import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    minlength: [3, 'Username must be at least 3 characters'],
    maxlength: [20, 'Username cannot exceed 20 characters'],
  },
  firstName: {
    type: String,
    trim: true,
    maxlength: [50, 'First name too long'],
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: [50, 'Last name too long'],
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
    enum: ['pending', 'accept', 'reject'],
    default: 'pending'
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
// async hook-এ next() call করতে হয় না — Mongoose নিজেই Promise wait করে
UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password method for login
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.models.User || mongoose.model('User', UserSchema);