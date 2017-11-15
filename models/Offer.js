const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/docknowtest', { useMongoClient: true });
const db = mongoose.connection;
mongoose.Promise = require('bluebird');

const offerSchema = mongoose.Schema({
  name: String,
  amount: Number,
  maximumRides: Number
});

module.exports = mongoose.model('offer', offerSchema);
