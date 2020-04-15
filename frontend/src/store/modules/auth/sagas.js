import { all, put, takeLatest, call } from 'redux-saga/effects'
import api from '~/services/api'
import history from '~/services/history'
import { signInSuccess } from './actions'

function* signIn({ email, password }) {
  const { data } = yield call(api.post, 'session', { email, password })
  const { token, user } = data
  // yield console.tron.log('response', data)

  if (!user.provider) {
    console.tron.error('Usuário não é prestador')
    yield false
  }

  yield put(signInSuccess(token, user))
  history.push('/dash')
}

function* Sagas() {
  yield all([
    takeLatest('@auth/SIGN_IN_REQUEST', ({ payload }) => signIn(payload)),
  ])
}

export default Sagas
