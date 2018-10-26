import Task from './taks.model';

export const taskResolvers: any = {
    Query: {
        async tasks(_, { input }){
            const tasks: any[] = await Task.find(input);
            return tasks.map(task => task.toGraph());
        }
    }
} 