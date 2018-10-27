export default `
  type Task {
    _id: ID!
    desc: String!
    checked: Boolean!
    createdAt: String!
    lastModifiedAt: String
  }

  type Query {
    tasks: [Task]
    task(_id: String!): Task
  }

  input TaskInput {
    desc: String
    cheked: Boolean
  }

  input TaskUpdate {
    _id: ID
    desc: String
  }

  type Mutation {
    create(input: TaskInput!): Task
    checkUncheck(_id: String!): Task
    update(input: TaskUpdate!): Task
    delete(_id: String!): Task
  }
`;
