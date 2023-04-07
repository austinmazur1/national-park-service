const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const parkSchema = new Schema(
  {
    name: String,
    location: String,
    description: String,
    imageUrl: String
  });

const Park = model("Park", parkSchema);

module.exports = Park;
