import * as mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  desc: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date()
  },
  lastModifiedAt: {
    type: Date
  }
}, { collection: 'Tasks' });

taskSchema.set('toObject', { virtuals: true });

taskSchema.method('toGraph', function toGraph (this: any) {
  return JSON.parse(JSON.stringify(this));
});

module.exports = mongoose.model('Task', taskSchema);
