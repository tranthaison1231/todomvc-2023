import { request } from '../utils/request'

export interface Todo {
  id: string
  value: string
  completed: boolean
}

export const deleteTodo = async (id: string) => {
  return await request.delete(`/todos/${id}`)
}

export const updateTodo = async ({ id, value, completed }: Todo) => {
  return await request.put(`/todos/${id}`, {
    value,
    completed
  })
}

export const fetchTodos = async () => {
  return await request.get<Todo[]>('/todos')
}

export const createTodo = async ({ value, completed }: Omit<Todo, 'id'>) => {
  return await request.post('/todos', {
    value,
    completed
  })
}
