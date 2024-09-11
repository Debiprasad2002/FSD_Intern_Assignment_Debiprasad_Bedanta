const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const { connectToRabbitMQ } = require('./services/rabbitmqService');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

// Connect to RabbitMQ
connectToRabbitMQ();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
