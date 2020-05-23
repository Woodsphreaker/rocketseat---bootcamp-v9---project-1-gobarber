import AsyncStrorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist'

export default (reducers) => {
  const presistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage: AsyncStrorage,
      whitelist: ['Auth', 'User'],
    },
    reducers,
  )

  return presistedReducer
}
