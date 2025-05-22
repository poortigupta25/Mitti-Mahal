const { Schema, model } = require('../connection');

const reportSchema = new Schema({
  reporter: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  reportedItem: { type: Schema.Types.ObjectId, required: true }, // Can be product, user, etc.
  itemType: { type: String, enum: ['product', 'user', 'feedback'], required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['pending', 'reviewed', 'resolved'], default: 'pending' },
  additionalInfo: { type: String },
  createdAt: { type: Date, default: Date.now },
  resolvedAt: { type: Date }
});

module.exports = model('report', reportSchema);