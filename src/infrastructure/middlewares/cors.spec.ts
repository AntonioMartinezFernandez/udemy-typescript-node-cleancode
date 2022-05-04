import request from 'supertest';
import app from '../app';

describe('Middleware CORS', () => {
  it('should verify CORS', async () => {
    await request(app)
      .get('/api/v1/register-vehicle')
      .expect('Access-Control-Allow-Origin', '*')
      .expect('Access-Control-Allow-Headers', '*')
      .expect('Access-Control-Allow-Methods', '*');
  });
});
