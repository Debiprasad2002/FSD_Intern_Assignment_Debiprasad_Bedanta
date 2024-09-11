import React, { useEffect, useState } from 'react';
import { fetchTasks, createTask, updateTaskStatus } from './taskService';

interface Task {
    id: number;
    name: string;
    completed: boolean;
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskName, setNewTaskName] = useState('');

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await fetchTasks();
        setTasks(data);
    };

    const handleAddTask = async () => {
        if (!newTaskName) return;
        await createTask(newTaskName);
        loadTasks(); // Reload tasks after creation
        setNewTaskName('');
    };

    const handleCompleteTask = async (id: number) => {
        await updateTaskStatus(id);
        loadTasks();
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input 
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                placeholder="Enter new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name} - {task.completed ? 'Completed' : 'Pending'}
                        {!task.completed && (
                            <button onClick={() => handleCompleteTask(task.id)}>
                                Mark as Complete
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
