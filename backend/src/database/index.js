const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');

module.exports = mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
