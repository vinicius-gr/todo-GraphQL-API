# Simple TODO API

:v: Hi there. This is a GraphQL Node JS API of a todo list connected to a NoSQL MongoDB database. It performs CRUD operations and cheking/uncheking a task.

### Dependencies

- [Node 6+](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Installation

    npm install

### Development

First, you will need to set the database variables according to your needs in `nodemon.json` file. Right now they are configured for mongo default:

    "DB_URL": "localhost"
    "DB_PORT": "27017"

You can also set a diferent port for de project, changing:

    "PORT": 3001

Then, run the `scripts\CreateDB.js` script:

    mongo scripts\createDB.js

To run the actual API:

    npm run dev

### Distribution

To prepare the app for distribution run:

    npm run compile
    npm run start

### Tests

Use app.specs.ts to test the operations.

    npm run test

### Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request
6. Make sure tests are passing

### License

This project is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.
