const Task = require('./task.model');
const mongoose = require('mongoose');

export default {
  Query: {
    tasks: async (_, { filter = {} }) => {
      try {
        const tasks: any[] = await Task.find({}, null, filter).exec();
        return tasks.map((task) => task.toGraph());
      } catch (err) {
        throw err;
      }
    },
    task: async (_, { id }) => {
      try {
        const task: any = await Task.findById(id);
        return task.toGraph();
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    add: async (_, { input }) => {
      try {
        const task: any = await Task.create({ _id: mongoose.Types.ObjectId(), ...input });
        return task.toGraph();
      } catch (err) {
        throw err;
      }
    }
  }
};
