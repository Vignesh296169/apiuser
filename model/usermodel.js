const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age:{
    type: Number,
    required: true
  },
  sex:{
    type: String,
    enum : ['male','female'],
    required: true
  },
  mobile:{
    type : String,
    required: true
  },
  details:{
     address: String,
     state: String,
     city: String
  },
  govid:{
    type: String
  },
  guardian:{
     detail: String,
     email: String,
     number: String
  },
  nationality:{
    type: String
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;
