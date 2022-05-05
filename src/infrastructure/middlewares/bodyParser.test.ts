import request from 'supertest';
import app from '../app';

describe('Middleware body parser', () => {
  it('should return parsed data sent in body', async () => {
    // app.post('/api/v1/register-vehicle', (req, res) => {
    //   res.send(req.body);
    // });

    await request(app)
      .post('/api/v1/register-vehicle')
      .send({ brand: 'Audi', model: 'TT', year: 2011, color: 'black' })
      .expect({ brand: 'Audi', model: 'TT', year: 2011, color: 'black' });
  });
});
