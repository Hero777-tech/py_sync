const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  facilityType: { type: String, required: true },
  facilitySubType: { type: String, required: true },
  uid: {type: Number}
});
const Users= mongoose.model('User', userSchema);
module.exports = {Users}