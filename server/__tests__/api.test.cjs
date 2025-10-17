const request = require('supertest');
const path = require('path');
const child = require('child_process');

let serverProcess;

beforeAll((done) => {
  // start the server as a child process
  serverProcess = child.spawn('node', [path.join(__dirname, '..', 'index.cjs')], {
    env: { ...process.env, PORT: '4000', ALLOW_DEMO_OTP: '1' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  serverProcess.stdout.on('data', (data) => {
    const s = data.toString();
    if (s.includes('Server running')) {
      done();
    }
  });

  serverProcess.stderr.on('data', (data) => {
    console.error('server stderr:', data.toString());
  });

  // no fallback timeout — rely on server stdout to call done()
});

afterAll(() => {
  if (serverProcess) serverProcess.kill();
});

test('POST /user/signin returns ok for seeded admin', async () => {
  const res = await request('http://localhost:4000')
    .post('/user/signin')
    .send({ empID: 'admin', password: 'admin123' });
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty('email');
  expect(res.body.status).toBe('ok');
});

test('POST /user/verify_otp returns token and role', async () => {
  const res = await request('http://localhost:4000')
    .post('/user/verify_otp')
    .send({ empID: 'admin', otp: 123456 });
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty('token');
  expect(res.body).toHaveProperty('role');
});

test('POST /user/request_otp returns demoOtp when demo mode enabled', async () => {
  const res = await request('http://localhost:4000')
    .post('/user/request_otp')
    .send({ empID: 'admin' });
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty('demoOtp');
});

test('GET /dashboard/get_dashboard returns JSON', async () => {
  const res = await request('http://localhost:4000').get('/dashboard/get_dashboard');
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty('utility_status');
});
