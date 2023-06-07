import axios from 'axios'

export const request = axios.create({
  baseURL: import.meta.env.VITE_TODO_APP_URL
})

request.interceptors.request.use(
  function (config) {
    return config
  },
  async function (error) {
    return await Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (res) {
    return res
  },
  async function (error) {
    return await Promise.reject(error)
  }
)
