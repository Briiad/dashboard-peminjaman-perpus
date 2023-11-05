const { default: moongose } = require("mongoose");

const userSchema = new moongose.Schema({
  email : {
    type: String,
    required: true,
    unique: true
  },
  name : {
    type: String,
    required: true,
  }
}, {timestamps: true})

const User = moongose.model.User || moongose.model('User', userSchema)

export default User;