const Task = require('./task.model');
const mongoose = require('mongoose');

export default {
  Query: {
    tasks: async () => {
      try {
        const tasks: any[] = await Task.find().exec();
        return tasks.map((task) => task.toGraph());
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    task: async (_, { id }) => {
      try {
        const task: any = await Task.findById(id);
        return task.toGraph();
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  Mutation: {
    create: async (_, { input }) => {
      try {
        const task: any = await Task.create(
          {
            _id: mongoose.Types.ObjectId(),
            ...input,
            createdAt: new Date()
          });
        return task.toGraph();
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    checkUncheck: async (_, { id }) => {
      try {
        const task: any = await Task.findById(id);
        const updatedTasks: any = await Task.findByIdAndUpdate(
          { _id: id },
          {
            checked: !task.checked,
            lastModifiedAt: new Date()
          },
          {
            new: true,
            runValidators: true
          });
        return updatedTasks.toGraph();
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    update: async (_, { input }) => {
      try {
        const task: any = await Task.findByIdAndUpdate(
          { _id: input._id },
          {
            desc: input.desc,
            lastModifiedAt: new Date()
          },
          {
            new: true,
            runValidators: true
          });
        return task.toGraph();
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  }
};
