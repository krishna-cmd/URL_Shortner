# 🔗 URL Shortener Service

A scalable backend service that converts long URLs into short, shareable links.
Built using **Node.js, Express, PostgreSQL, Redis, and Docker**.

This project demonstrates production-style backend architecture including **caching, rate limiting, analytics, and containerized deployment**.

---

# 🚀 Features

* Generate short URLs
* Fast redirects
* Redis caching for high performance
* Click analytics tracking
* Rate limiting to prevent abuse
* Dockerized environment
* Clean architecture (Controller / Service / Repository)

---

# 🧠 Architecture

User
↓
Express API
↓
Rate Limiter (Redis)
↓
Redis Cache
↓
PostgreSQL Database

---

# 📦 Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Redis
* Docker
* Docker Compose

---

# 📁 Project Structure

src/

config/
controllers/
middlewares/
repositories/
routes/
services/
utils/

server.js

---

# ⚡ API Endpoints

### Create Short URL

POST /shorten

Request:

{
"url": "https://google.com"
}

Response:

{
"shortUrl": "http://localhost:3000/1"
}

---

### Redirect

GET /:shortCode

Example:

GET /1

Redirects to the original URL.

---

# 📊 Analytics

Each redirect updates:

click_count

Stored in PostgreSQL.

---

# 🐳 Running with Docker

docker-compose up --build

Services started:

* Node.js API
* PostgreSQL
* Redis

---

# 🧪 Local Development

1. Install dependencies

npm install

2. Start server

node src/server.js

---

# 📈 Future Improvements

* Custom short URLs
* Analytics dashboard
* URL expiration
* Distributed ID generator
* Background workers for analytics

---

# 👨‍💻 Author

Krishna Biradar
Backend Developer (Node.js)
