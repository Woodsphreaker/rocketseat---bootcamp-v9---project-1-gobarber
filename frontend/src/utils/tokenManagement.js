const getToken = () => {
  return localStorage.getItem('sec-token')
}

const setToken = (token) => {
  localStorage.setItem('sec-token', token)
}

export { getToken, setToken }
