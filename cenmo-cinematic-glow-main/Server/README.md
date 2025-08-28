# Node Backend Starter (Express + Mongoose)

A minimal, production-ready Node.js backend with Express, MongoDB (Mongoose), CORS, and dotenv.

## Quick Start

```bash
npm install
cp .env.example .env  # or create your own .env
npm run dev           # with nodemon
# or
npm start
```

- Server: http://localhost:5000
- Health Check: `GET /`
- Users API:
  - `GET /api/users`
  - `POST /api/users`  body: `{ "name": "Ritik", "email": "ritik@example.com" }`

## Project Structure
```text
server.js
config/db.js
controllers/userController.js
models/User.js
routes/userRoutes.js
.env.example
```

## Notes
- Uses ES Modules (`type: module`). Import paths include `.js` extensions.
- Update `MONGO_URI` in `.env` for your environment. If you don't need DB yet, the app still runs.
- Add more models/routes as needed.
