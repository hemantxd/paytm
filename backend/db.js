const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:ap7Z7nrimQNfFtEn@cluster0.fag9sij.mongodb.net/paytm"
);

const userSchema = new Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
