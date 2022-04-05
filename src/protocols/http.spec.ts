import { parseUrl } from './http.protocol';

describe('URL parser', () => {
  it('Login URL', () => {
    const parsedURL = parseUrl.parseUrl('http://localhost:3000/login');

    expect(parsedURL.protocol).toBe('http:');
    expect(parsedURL.hostname).toBe('localhost');
    expect(parsedURL.port).toBe('3000');
    expect(parsedURL.path).toBe('/login');
  });

  it('Login URL with parameters', () => {
    const parsedURL = parseUrl.parseUrl(
      'http://localhost:3000/login?user=user&password=password',
    );

    const expectedResponse = { user: 'user', password: 'password' };

    expect(parsedURL.host).toBe('localhost:3000');
    expect(parsedURL.query).toEqual(expectedResponse);
  });

  it('User URL', () => {
    const parsedURL = parseUrl.parseUrl('http://localhost:3000/user');

    expect(parsedURL.host).toBe('localhost:3000');
    expect(parsedURL.path).toBe('/user');
  });

  it('User URL with parameters', () => {
    const parsedURL = parseUrl.parseUrl(
      'http://localhost:3000/user?user=user&name=name&lastname=lastname',
    );
    const expectedResponse = {
      user: 'user',
      name: 'name',
      lastname: 'lastname',
    };

    expect(parsedURL.host).toBe('localhost:3000');
    expect(parsedURL.query).toEqual(expectedResponse);
  });
});
