export const taskTypeDefs = `
  type Task {
    id: ID! @unique
    desc: String!
    checked: Boolean!
    createdAt: Date!
    lastModifiedAt: Date!
  }

  input taskInput {
    desc: String!
    checked: Boolean!
    createdAt: Date!
    lastModifiedAt: Date!
  }

  extend type Query {
    tasks(input: TaskInput): [Task]
    task(id: String!): Task
  }

  extend type Mutation {
    addTask(input: TaskInput!): Task
  }
`;