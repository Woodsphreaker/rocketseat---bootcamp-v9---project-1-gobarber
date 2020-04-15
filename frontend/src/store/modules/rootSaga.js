import { all } from 'redux-saga/effects'

import Auth from './auth/sagas'

export default function* () {
  return yield all([Auth()])
}
