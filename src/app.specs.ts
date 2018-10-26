import * as supertest from 'supertest';
import app from './app';

describe('App', () => {
  it('works', () => supertest(app)
    .get('/')
    .expect(200));
});