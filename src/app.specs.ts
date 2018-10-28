const chai = require('chai');

const SERVER_URL = 'http://localhost:3001';

const expect = chai.expect;
const request = require('supertest')(SERVER_URL);


describe('Tasks API', () => {
  let createdTask: any;

  it('Creates a new task', (done) => {
    request.post('/tasks')
      .send({ query: 'mutation{ create(input: { desc: "Study for the computer networks test" cheked: false }){ _id desc checked createdAt } }' })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        createdTask = res.body.data.create;
        expect(res.body).to.deep.equal({
          data: {
            create: {
              _id: createdTask._id,
              desc: 'Study for the computer networks test',
              checked: false,
              createdAt: createdTask.createdAt
            }
          }
        });
        done();
      });
  });

  it('Queries for the created task', (done) => {
    request.post('/tasks')
      .send({ query: `{ task(_id: "${createdTask._id}"){ _id desc checked createdAt } }` })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body).to.deep.equal({
          data:
          {
            task:
            {
              _id: createdTask._id,
              desc: 'Study for the computer networks test',
              checked: false,
              createdAt: createdTask.createdAt
            }
          }
        });
        done();
      });
  });

  it('Queries for all tasks', (done) => {
    request.post('/tasks')
      .send({ query: '{ tasks{ _id desc checked lastModifiedAt } }' })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.tasks).to.be.an('array');
        expect(res.body.data.tasks.some((task) => task._id === createdTask._id)).to.be.true;
        done();
      });
  });

  it('Checks the created task', (done) => {
    request.post('/tasks')
      .send({ query: `mutation{ checkUncheck(_id: "${createdTask._id}"){ _id desc checked } }` })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.checkUncheck.checked).to.be.true;
        done();
      });
  });

  it('Updates the description of the created task', (done) => {
    request.post('/tasks')
      .send({ query: ` mutation{ update(input: { _id: "${createdTask._id}" desc: "Study for the math test" }) { _id desc lastModifiedAt } }` })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.update.desc).to.deep.equal('Study for the math test');
        expect(res.body.data.update.lastModifiedAt).to.not.deep.equal(createdTask.lastModifiedAt);
        done();
      });
  });

  it('Deletes the created task', (done) => {
    request.post('/tasks')
      .send({ query: `mutation{ delete(_id: "${createdTask._id}"){ _id } }` })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.data.delete._id).to.deep.equal(createdTask._id);
        done();
      });
  });
});
