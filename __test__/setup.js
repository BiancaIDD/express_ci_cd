import request from "supertest";
import app from '../App.js'



before(async () => {
  // create user
  const payload = {
    "name": "johnny",
	"password": "12345",
	"email": "JVG_18@gmail.com"
  }
  await request(app).post('/users').send(payload);
});
