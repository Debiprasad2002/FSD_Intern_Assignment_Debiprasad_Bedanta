
Objective of this Assignment
- Add new tasks.
- View a list of tasks.
- Mark tasks as completed.
- Filter tasks by pending or completed status.
- Search tasks by name.

The project consists of a **React frontend** and a **Node.js + Express backend**. The backend uses **Redis for caching** and **RabbitMQ for background task processing**.

## Tech Stack
- **Frontend**: React, TypeScript, Axios
- **Backend**: Node.js, Express.js
- **Database**: (Optional) PostgreSQL or MongoDB, or In-memory storage
- **Caching**: Redis
- **Message Queue**: RabbitMQ
- **Bonus Features**: 
  - Push Notifications using the Push API and Service Workers
  - Background Task Processing with RabbitMQ
  - Task Prioritization

## Features
- Add, view, and complete tasks.
- Task filtering (pending/completed) and search functionality.
- Dynamic task list updates without a full page reload.
- Push notifications for new tasks (Bonus).
- Redis caching to improve performance (Bonus).
- Background task processing using RabbitMQ (Bonus).
- Simple authentication (Bonus).

## Setup Instructions

### Prerequisites
- **Node.js** (v18.17.0 or above)
- **Redis** (running on port 6379)
- **RabbitMQ** (running on port 5672)
- **Docker** (for optional backend dockerization)

### Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
```

### Backend Setup

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Redis and RabbitMQ**:
   - Ensure that both Redis and RabbitMQ are running on their default ports (`6379` for Redis and `5672` for RabbitMQ). 
   - If you are using Docker, you can start Redis and RabbitMQ with the following commands:
     ```bash
     docker run -d --name redis -p 6379:6379 redis
     docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management
     ```

4. **Run the backend server**:
   ```bash
   npm run dev
   ```
   The server should now be running on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the frontend**:
   ```bash
   npm start
   ```
   The React app should now be running on `http://localhost:3000`.

### Running the Application

1. **Start Redis** and **RabbitMQ** (if they are not already running).
2. Run the **backend** server:
   ```bash
   npm run dev
   ```
   (This command should be executed in the `backend` folder.)

3. Run the **frontend** server:
   ```bash
   npm start
   ```
   (This command should be executed in the `frontend` folder.)

4. Open your browser and go to `http://localhost:3000` to interact with the application.

### Assumptions Made
- Redis and RabbitMQ are running on their default ports.
- No authentication system is included unless the bonus feature is implemented.

## Endpoints

### Backend API Endpoints:
- **POST** `/tasks` – Create a new task.
- **GET** `/tasks` – Fetch all tasks (with optional pagination).
- **PUT** `/tasks/:id` – Update the status of a task (mark as completed).

### Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
REDIS_URL=redis://localhost:6379
RABBITMQ_URL=amqp://localhost:5672
```

Here are some snaps of the Project 


![Screenshot 2024-09-11 120758](https://github.com/user-attachments/assets/1a5ae6f7-ca05-4b11-b80e-bc3ca22e82e0)


![Screenshot 2024-09-11 120817](https://github.com/user-attachments/assets/5e9c5c27-9435-4293-865d-ed685013f7af)


![Screenshot 2024-09-11 121228](https://github.com/user-attachments/assets/02fb1408-5abe-4b8e-b96c-d8fdaf08894f)


![Screenshot 2024-09-11 121329](https://github.com/user-attachments/assets/adb1e8d8-bccf-447e-9d37-49505eabdbdf)






