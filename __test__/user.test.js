import request from 'supertest';
import  app  from '../App.js';
import chai from 'chai';

const {expect} = chai;


describe('test for get information from user', () => {
  it('logged user', async (done) => {
    const payload = {
      password: '12345',
      email: 'JVG_18@gmail.com',
    };
    const { body, status } = await request(app).post('/auth').send(payload);
    expect(status).to.equal(200);
    expect(body).to.have.property('accessToken');
    expect(body).to.have.property('user');
    expect(payload.email).to.equal(body.user.email);
    done()
  });
});
