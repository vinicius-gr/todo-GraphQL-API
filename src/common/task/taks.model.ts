const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    desc: { type: String, required: true },
    checked: { type: Boolean, required: true },
    createdAt: { type: Date, required: true },
    lastModifiedAt: { type: Date, required: true }
});

taskSchema.method('toGraph', function toGraph(this: any) {
    return JSON.parse(JSON.stringify(this));
});

export default mongoose.model('Task', taskSchema);