const express = require('express');
const { getAllTasks, createTask, updateTaskStatus } = require('../controllers/taskController');
const router = express.Router();

router.get('/', getAllTasks);
router.post('/', createTask);
router.put('/:id', updateTaskStatus);

module.exports = router;
