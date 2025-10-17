SmartController-SIH — Docker setup

This repository contains a Vite + React frontend and a Node/Express backend using SQLite for demo persistence.

Files added:
- `Dockerfile.frontend` — builds the frontend and serves it with nginx on port 80.
- `server/Dockerfile` — builds the backend image and runs `node index.cjs` on port 3000.
- `docker-compose.yml` — orchestrates frontend + backend; mounts `./server/data` to persist the SQLite DB.

Quick start (requires Docker & docker-compose):

Build and start:

```bash
# From repository root
docker compose build --progress=plain
docker compose up -d
```

Visit:
- Frontend: http://localhost:8080
- Backend API: http://localhost:3000

Seeded demo credentials (created on first run):
- empID: admin
- password: admin123

Notes:
- For production, replace `JWT_SECRET` in `docker-compose.yml` with a secure secret and consider using a managed database (Postgres) instead of SQLite.
- To preserve DB between container runs ensure `./server/data` exists and is writable by your user.

Troubleshooting:
- If the backend fails to start, check logs:
  docker compose logs backend
- To rebuild after code changes:
  docker compose up -d --build
