import axios from 'axios'

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})



export const loginUser = async (loginInfo) => {
  const resp = await api.post('/auth/login', loginInfo)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerInfo) => {
  console.log(registerInfo)
  const resp = await api.post('/users/', registerInfo)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}


export const getByCategory = async (category) => {
  const res = await axios.put(`${baseUrl}/products/categories`, { category: `${category}` })
  return res.data
}

export const getAllProducts = async () => {
  const res = await axios.get(`${baseUrl}/products`)
  return res.data
}

export const updateEmail = async (id, data, hash) => {
  const response = await api.put(`/users/${id}`, { email: data, password: hash })
  return response.data
}

export const updateAddress = async (id, data, hash) => {
  const response = await api.put(`/users/${id}`, { address: data, password: hash })
  return response.data
}

export const destroyUser = async (id) => {
  const response = await api.delete(`/users/${id}`)
  return response.data
}

export const newOrder = async (user, user_address, delivery, hash) => {
  const response = await axios.post(`${baseUrl}/orders`, { user_id: user, address: user_address, delivery_pickup: delivery, password: hash})
  return response.data
}