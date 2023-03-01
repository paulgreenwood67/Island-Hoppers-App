//THIS ONE
const mongoose = require("mongoose");
// schema for the the island names
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category",  CategorySchema);
