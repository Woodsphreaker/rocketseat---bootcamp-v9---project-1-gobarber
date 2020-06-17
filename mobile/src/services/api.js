import axios from 'axios'
import { getToken } from '~/utils/tokenManagement'

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
})

api.interceptors.request.use(async (config) => {
  const token = await getToken()

  if (!token) {
    return config
  }

  const { headers } = config

  const customHeaders = {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }

  return { ...config, ...customHeaders }
})

export default api
