const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  profilePicture: String,
  dob: {
    type: Date,
    required: false,
  },
  gender: String,
  email: {
    type: String,
    unique: true,
    required: true, 
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: "Invalid email address",
    },
  },
  phoneNumber: String,
  nationality: String,
  countryOfResidence: String,
  state: String,
  userDetailsLink: String,
  registrationDate: Date,
});

const RegisterModel = mongoose.model("register", RegisterSchema);

module.exports = RegisterModel;
