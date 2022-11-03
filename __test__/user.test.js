import request from 'supertest';
import  app  from '../App.js';
import { expect, jest, test } from '@jest/globals';

describe('test for get information from user', () => {
  it('logged user', async () => {
    const payload = {
      password: '12345',
      email: 'JVG_18@gmail.com',
    };
    const { body, status } = await request(app).post('/auth').send(payload);
    expect(status).toBe(200);
    expect(body).toHaveProperty('accessToken');
    expect(body).toHaveProperty('user');
    expect(payload.email).toBe(body.user.email);
  });
});
