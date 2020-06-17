import AsyncStorage from '@react-native-community/async-storage'

const getToken = () => {
  return AsyncStorage.getItem('sec-token')
}

const setToken = (token) => {
  return AsyncStorage.setItem('sec-token', token)
}

export { getToken, setToken }
