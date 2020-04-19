import axios from 'axios'
import { getToken } from '~/utils/tokenManagement'

const api = axios.create({
  baseURL: 'http://localhost:3333/',
})

api.interceptors.request.use((config) => {
  const token = getToken()

  if (!token) {
    return config
  }

  const { headers } = config
  const customHeaders = {
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }

  return { ...config, ...customHeaders }
})

export default api
