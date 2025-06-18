1. Task Manager API

A simple RESTful API for managing tasks, built with Node.js and Express.

## Features

- Create, read, update, and delete tasks
- Lightweight and easy to deploy
- Uses modern JavaScript (ES6+)
- Supports JSON-based requests/responses

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) for package management
- MongoDB or other database (if used — update accordingly)

---

### Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api


2.Install dependencies:
npm install
   or
pnpm install

3.Start the server:
node server.js

API Endpoints
| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| GET    | `/tasks/:id` | Get a single task |
| POST   | `/tasks`     | Create a new task |
| PUT    | `/tasks/:id` | Update a task     |
| DELETE | `/tasks/:id` | Delete a task     |

Folder Structure
.
├── server.js
├── routes.js
├── task.js
├── package.json
└── .gitignore

License
MIT License © 2025 Erastus Wainaina

