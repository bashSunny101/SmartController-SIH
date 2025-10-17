const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const { join } = require('path');
const dotenv = require('dotenv');

dotenv.config();

const DB_FILE = process.env.DB_FILE || join(__dirname, 'data.sqlite');

const app = express();
app.use(cors());
app.use(express.json());

let db;
async function initDb() {
  db = await open({ filename: DB_FILE, driver: sqlite3.Database });
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      empID TEXT UNIQUE,
      username TEXT,
      email TEXT,
      password TEXT,
      role TEXT,
      token TEXT
    );
  `);
  await db.exec(`
    CREATE TABLE IF NOT EXISTS roles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    );
  `);
  await db.exec(`
    CREATE TABLE IF NOT EXISTS alerts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      alert_id TEXT,
      type TEXT,
      severity TEXT,
      attacker_ip TEXT,
      action TEXT,
      createdAt TEXT
    );
  `);
  await db.exec(`
    CREATE TABLE IF NOT EXISTS honeypot (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      alert_id TEXT,
      type TEXT,
      severity TEXT,
      attacker_ip TEXT,
      action TEXT,
      createdAt TEXT
    );
  `);
  await db.exec(`
    CREATE TABLE IF NOT EXISTS hardware (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      hw_id TEXT,
      name TEXT,
      type TEXT,
      patched INTEGER DEFAULT 0
    );
  `);

  // Seed a default admin if missing
  const admin = await db.get('SELECT * FROM users WHERE empID = ?', 'admin');
  if (!admin) {
    const hashed = await bcrypt.hash('admin123', 10);
    await db.run('INSERT INTO users(empID, username, email, password, role) VALUES(?,?,?,?,?)', 'admin', 'Administrator', 'admin@example.com', hashed, 'admin');
  }
  const roleExists = await db.get('SELECT * FROM roles WHERE name = ?', 'admin');
  if (!roleExists) {
    await db.run('INSERT INTO roles(name) VALUES(?)', 'admin');
    await db.run('INSERT INTO roles(name) VALUES(?)', 'operator');
  }
}

initDb().then(()=>console.log('DB initialized')).catch(e=>console.error(e));

function generateToken(payload) {
  const secret = process.env.JWT_SECRET || 'dev_secret_change_me';
  return jwt.sign(payload, secret, { expiresIn: '8h' });
}

async function findUserByEmpID(empID) {
  return db.get('SELECT * FROM users WHERE empID = ?', empID);
}

// Endpoints
app.post('/user/signin', async (req, res) => {
  const { empID, password } = req.body;
  const user = await findUserByEmpID(empID);
  if (user && (await bcrypt.compare(password, user.password))) {
    return res.json({ email: user.email, status: 'ok' });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/user/verify_otp', async (req, res) => {
  const { empID, otp } = req.body;
  const user = await findUserByEmpID(empID);
  if (!user) return res.status(404).json({ error: 'User not found' });
  const token = generateToken({ empID: user.empID, role: user.role });
  await db.run('UPDATE users SET token = ? WHERE empID = ?', token, empID);
  return res.json({ token, role: user.role });
});

app.get('/admin/get_roles', async (req, res) => {
  const rows = await db.all('SELECT * FROM roles');
  res.json({ data: rows });
});

app.post('/admin/add_privilege', async (req, res) => {
  res.json({ success: true });
});

app.post('/admin/signup', async (req, res) => {
  const { empID, username, email, role, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    await db.run('INSERT INTO users(empID, username, email, password, role) VALUES(?,?,?,?,?)', empID, username, email, hashed, role);
    return res.json({ data: { toString: () => 'data:image/svg+xml;utf8,<svg></svg>' } });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to create user' });
  }
});

app.get('/dashboard/get_dashboard', async (req, res) => {
  const dashboard = {
    utility_status: { data: 'active' },
    grid_status: { data: [{ _id: 'input', totalValue: '100' }, { _id: 'output', totalValue: '80' }, { _id: 'storage', totalValue: '50' }] },
    ids: 'Active',
    firewall: 'Active',
    honeypot: { total: 10, active: 2, detections: 5 },
    security_alerts: [],
    co2_emission: { vslue: 12, unit: 'kg' },
    energy_efficiency: { value: 95, unit: '%' },
    active_components: { data: [{ typeName: 'solar plants', activeCount: 10 }, { typeName: 'wind turbines plants', activeCount: 5 }, { typeName: 'battery', activeCount: 3 }] },
    weekly_data: { data: [] }
  };
  res.json(dashboard);
});

app.get('/alert/get_security_logs/:timeframe?', async (req, res) => {
  const rows = await db.all('SELECT * FROM alerts');
  res.json({ success: true, logs: rows });
});

app.get('/alert/latest_24_hours', async (req, res) => {
  const totalSecurityAlerts = (await db.get('SELECT COUNT(*) as c FROM alerts')).c;
  const totalHoneypotAlerts = (await db.get('SELECT COUNT(*) as c FROM honeypot')).c;
  res.json({ totalSecurityAlerts, totalHoneypotAlerts, blockedUserCount: 0, surveillanceUserCount: 0 });
});

app.get('/alert/get_honeypot_logs/:timeframe?', async (req, res) => {
  const rows = await db.all('SELECT * FROM honeypot');
  res.json({ success: true, logs: rows });
});

app.get('/alert/get_security_logs', async (req, res) => {
  const rows = await db.all('SELECT * FROM alerts');
  res.json({ data: rows });
});

app.get('/alert/get_honeypot_logs', async (req, res) => {
  const rows = await db.all('SELECT * FROM honeypot');
  res.json({ data: rows });
});

app.get('/hardware/get_hardware_details', async (req, res) => {
  const hardwareData = await db.all('SELECT * FROM hardware');
  res.json({ hardwareData, counts: [{ pendingUpdate: 0, totalHardware: hardwareData.length, patchedDevices: hardwareData.filter(h=>h.patched).length }], patchLogs: [] });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
