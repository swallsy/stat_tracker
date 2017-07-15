const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const statSchema = new mongoose.Schema({
  date: { type: Date },
  activity: { type: Number },
  value: { type: Number },
  username: { type: String }
})

const Stat = mongoose.model('Stat', statSchema);

module.exports = Stat;
