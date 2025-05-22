const { Schema, model } = require('../connection');

const feedbackSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  product: { type: Schema.Types.ObjectId, ref: 'product' },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('feedback', feedbackSchema);