const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    min: 4,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 50,
  },
  schoolId: {
    type: String,
    required: true,
    unique: true,
    min: 4,
    max: 10,
  },
  attendanceCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", UserSchema);
