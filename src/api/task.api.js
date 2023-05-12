import axios from "axios";

const tasksApi = axios.create({
  baseURL: 'https://python-react-production.up.railway.app/tasks/api/v1/tasks/'
})

// List all tasks
export const getAllTasks = ()  => tasksApi.get('/') // forma simplificada

// List one task
export const getOneTask = (id) => tasksApi.get(`/${id}/`)

// Create
export const createTask = (task)  => {
  return tasksApi.post('/', task)
}

// Delete
export const deleteTask = (id) => tasksApi.delete(`/${id}`)

// Update
export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task)