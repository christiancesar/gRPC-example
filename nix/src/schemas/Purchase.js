const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
  userId: String,
  title: String,
  value: Number
});

const Purchase = mongoose.model('Purchase', PurchaseSchema);


module.exports = Purchase;