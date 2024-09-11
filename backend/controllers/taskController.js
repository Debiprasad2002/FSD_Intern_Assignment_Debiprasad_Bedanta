const redisClient = require('../services/redisService');
const { publishToQueue } = require('../services/rabbitmqService');

let tasks = []; // Temporary in-memory storage

// Get all tasks (with Redis caching)
exports.getAllTasks = async (req, res) => {
    try {
        const cachedTasks = await redisClient.get('tasks');
        if (cachedTasks) {
            return res.json(JSON.parse(cachedTasks));
        }

        await redisClient.set('tasks', JSON.stringify(tasks));
        return res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching tasks' });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    const { name, priority } = req.body;
    if (!name) return res.status(400).json({ message: 'Task name is required' });

    const newTask = { id: tasks.length + 1, name, completed: false, priority };
    tasks.push(newTask);

    // Invalidate Redis cache
    await redisClient.del('tasks');

    // Publish to RabbitMQ
    await publishToQueue('task_created', newTask);

    return res.status(201).json(newTask);
};

// Update task status
exports.updateTaskStatus = async (req, res) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.completed = true;

    // Invalidate Redis cache
    await redisClient.del('tasks');

    return res.json(task);
};
