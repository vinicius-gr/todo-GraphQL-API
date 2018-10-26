export const taskTypeDefs = `
  type Task {
    id: String!
    desc: String!
  }

  type Query {
    tasks: [Task]
    task(id: String!): Task
  }
`;