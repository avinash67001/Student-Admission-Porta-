const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    require: true,
  },
  LastName: {
    type: String,
    require: true,
  },
  Subject: {
    type: String,
    require: true,
  },
  Class: {
    type: String,
    require: true,
  },
  Date: {
    type: Date,
    require: true,
  },
  Amount: {
    type: Number,
    require: true,
  },
});

const RegistrationsModel = new mongoose.model("Student", RegistrationSchema);

module.exports = RegistrationsModel;
