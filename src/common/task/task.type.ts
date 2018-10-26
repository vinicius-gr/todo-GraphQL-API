export default `
  type Task {
    _id: ID!
    desc: String!
    checked: Boolean!
    createdAt: String!
    lastModifiedAt: String!
  }

  input TaskFilterInput {
    limit: Int
  }

  type Query {
    tasks: [Task]
    task(id: String!): Task
  }

  input TaskInput {
    desc: String
    cheked: Boolean
    createdAt: String
    lastModifiedAt: String
  }

  type Mutation {
    add(input: TaskInput!): Task
  }
`;
