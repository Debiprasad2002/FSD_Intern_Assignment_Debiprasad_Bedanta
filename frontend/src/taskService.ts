import axios from 'axios';

export const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    return response.data;
};

export const createTask = async (name: string) => {
    await axios.post('http://localhost:5000/tasks', { name });
};

export const updateTaskStatus = async (id: number) => {
    await axios.put(`http://localhost:5000/tasks/${id}`);
};
