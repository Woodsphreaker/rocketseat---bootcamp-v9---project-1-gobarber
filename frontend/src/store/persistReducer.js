import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default (reducers) => {
  const presistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['Auth'],
    },
    reducers
  )

  return presistedReducer
}
