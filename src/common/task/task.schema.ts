const Task = require('./task.model');

export default {
  Query: {
    async tasks () {
      const tasks: any[] = await Task.find().exec();
      return tasks.map((task) => task.toGraph());
    }
  }
};
