const Task = require('./task.model');

export const taskResolvers: any = {
    Query: {
        async tasks(_, { input }){
            const tasks: any[] = await Task.find().exec();
            console.log(tasks);
            return tasks.map(task => task.toGraph());
        }
    }
} 