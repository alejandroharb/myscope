const mongoose = require('mongoose');
const { Schema } = mongoose;

const gustSchema = new Schema({
  company_name: String,
  location: String,
  based: String,
  intellectual_property: String,
  fulltime_team: String,
  founded: String,
  website: String,
  current_use_cases: String,
  founders_background: String,
  company_description: String,
  need_solving: String,
  funding: String,
  email: String,
  solution: String,
  milestones_achieved: String,
  accelerators_attended: String,
  product_video_links: String,
  linkedin_link: String,
  sales_revenue: String,
  market: String,
  competition: String,
  operational_capital: String,
  regulatory_strategy: String
});

module.exports = gustSchema;
