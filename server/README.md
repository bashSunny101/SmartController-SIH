SmartController-SIH
===================

A small full-stack single-page app (React + Vite frontend, Express + SQLite backend) built as part of an SIH project. This repo includes local dev scripts, Docker artifacts for quick containerization, a simple OTP-based auth prototype (demo mode), automated tests (Jest + Supertest), and a CI workflow.

Highlights
- Frontend: React 18 + Vite (located in `src/`)
- Backend: Node.js + Express (in `server/`) using SQLite for quick demos
- OTP: server supports `POST /user/request_otp` and `POST /user/verify_otp`. For local/dev/testing there is `ALLOW_DEMO_OTP=1` which returns OTP in response.
- Tests: Jest + Supertest in `server/__tests__`
- Docker: `Dockerfile.frontend`, `server/Dockerfile` and `docker-compose.yml` for an easy local demo

Quick links
- Frontend dev: `http://localhost:5173` (vite)
- Backend API: `http://localhost:3000`

Prerequisites
- Node.js 18+ (local dev)
- npm
- Docker & Docker Compose (optional, for containerized deployment)

Files worth knowing
- `src/` — React app
- `server/index.cjs` — Express server and API
- `server/__tests__/` — backend tests
- `Dockerfile.frontend`, `server/Dockerfile`, `docker-compose.yml` — containerization
- `.github/workflows/test.yml` — CI to run backend tests

Local development (quick)
1. Install root deps (frontend):

```bash
npm install
```

2. Install server deps and run tests:

```bash
cd server
npm install
npm test
```

3. Run backend (dev):

```bash
# from repo root
# start backend
node server/index.cjs
# or use nodemon
cd server && npm run dev
```

4. Start frontend dev server:

```bash
# from repo root
npm run dev
# open http://localhost:5173 (vite will pick a nearby free port if 5173 is busy)
```

Auth demo (seeded user)
- A demo admin user is seeded during DB initialization:
  - empID: `admin`
  - password: `admin123`

- OTP flow (dev):
  1. Request OTP (demo mode):
     POST /user/request_otp { empID: 'admin' } — returns `demoOtp` when `ALLOW_DEMO_OTP=1`.
  2. Verify OTP: POST /user/verify_otp { empID: 'admin', otp: <code> } — returns `{ token, role }`.

Docker / Containerized (quick demo)
This repo includes a `docker-compose.yml` that runs the frontend (built and served by nginx) and backend (Node app using SQLite) for quick local deployments.

Build & start:

```bash
docker compose build
docker compose up -d
```

Then open:
- Frontend: http://localhost:8080
- Backend: http://localhost:3000

Notes:
- The provided compose uses SQLite for simplicity and mounts `./server/data` for DB persistence. For production, consider using Postgres and migrating the DB.
- Replace `JWT_SECRET` and SMTP credentials with secure values (see `.env.example`).

Environment variables
- `server/index.cjs` reads from `process.env`. Create a `.env` file in the `server/` folder or provide variables via your environment or compose file.

Key variables (.env.example provided):
- PORT=3000
- DB_FILE=./data.sqlite
- JWT_SECRET=your_jwt_secret_here
- ALLOW_DEMO_OTP=1 (only for development/testing!)
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM — for email delivery of OTPs

Testing & CI
- Run backend tests locally:

```bash
cd server && npm test
```

- GitHub Actions will run server tests on push/pull requests using `.github/workflows/test.yml`.

Production notes & recommendations
- Do NOT use `ALLOW_DEMO_OTP=1` in production. Disable this and provide a working SMTP configuration.
- Use a managed Postgres database instead of SQLite for production. Migrate user/alert/hardware tables and update DB access code accordingly.
- Use a secrets manager (Vault, GitHub Secrets, environment vars in your host) to store `JWT_SECRET` and SMTP credentials.
- Add HTTPS (TLS) termination in front of the frontend/backend (load balancer or reverse proxy).
- Consider container orchestration (Kubernetes, Render, Fly.io, etc.) or serverless functions for scaling the backend.

What I did in the repo
- Seeded demo admin + example alerts/honeypot/hardware data in `server/index.cjs`.
- Added OTP endpoints and demo-mode support.
- Added Dockerfiles, docker-compose, and a README for Docker.
- Added Jest + Supertest tests and a GitHub Actions workflow.

Next steps I can do for you
- Migrate server to Postgres and update docker-compose for a production-ready stack.
- Harden JWT & rotate secrets, add migrations and CI checks.
- Create an automated deployment (CI -> staging -> prod) using GitHub Actions or a cloud provider (I can scaffold it).

If you want me to proceed with a Postgres migration and a production docker-compose, reply: "migrate to postgres".
If you want me to create a PR description and merge the branch, reply: "open PR & merge".
