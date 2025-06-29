# 🛡️ Secure API Auth Template

A production-ready Node.js API template for handling user authentication using **JWT**, **MongoDB**, and **Express**. Built for developers who want a solid starting point to implement secure login, registration, and protected routes.

---

## 🚀 Features

- 🔐 JWT-based Authentication
- 🔒 Protected Routes (`/api/dashboard`)
- 🧂 Secure Password Hashing with Bcrypt
- 🛠️ Modular MVC Architecture
- 🌱 MongoDB Integration (via Mongoose)
- 🌐 CORS Enabled
- 📂 Clean and Scalable File Structure
- 🧪 Easy to Extend for Real Projects

---

## ⚙️ Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt.js
- JSON Web Tokens (JWT)
- Dotenv
- Nodemon (dev)

---

## 📁 Folder Structure

```bash
secure-api-auth-template/
├── config/           # Database connection
├── controllers/      # Business logic
├── middleware/       # Auth & error handlers
├── models/           # Mongoose schema
├── routes/           # Express routing
├── .env.example      # Sample environment config
├── package.json
├── server.js
```

---

## 🛠️ Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/secure-api-auth-template.git
cd secure-api-auth-template
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Rename `.env.example` to `.env` and update:
```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

### 4. Start the Server
```bash
npm run dev
```

---

## 📬 API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| POST   | `/api/register`  | Register a new user   |
| POST   | `/api/login`     | Login & receive token |
| GET    | `/api/dashboard` | Protected route       |

---

## 🧪 Sample JSON Body

### Register:
```json
{
  "username": "bkuser",
  "password": "supersecure123"
}
```

### Login:
```json
{
  "username": "bkuser",
  "password": "supersecure123"
}
```

---

## 💬 Response Example

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsIn..."
}
```

Use this token as a **Bearer Token** in headers:
```
Authorization: Bearer <token>
```

---

## ✅ Use Cases

- Quickstart for secure API projects
- Demo auth flows for job interviews
- Starting point for SaaS/MERN apps

---

## 📘 License

MIT — feel free to fork and build on it.

---

## 👑 Built by [BK Inc.](https://github.com/briankarmo) – Full-Stack Developer & Shopify Expert
