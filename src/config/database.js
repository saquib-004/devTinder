const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://fahadchacha0:chacha_123@shopit.aptad.mongodb.net/shopit?retryWrites=true&w=majority&appName=shopit"
  );
};

module.exports = connectDB;
