const mongoose = require('mongoose');
const { Schema } = mongoose;
const GustProfile = require('./GustProfile');

const companySchema = new Schema({
  name: String,
  description: String,
  funding: Number,
  founded: Date,
  indication: String,
  tmcx: Boolean,
  domain_category: String,
  class_category: String,
  gust_profile: GustProfile
});

mongoose.model('companies', companySchema);
