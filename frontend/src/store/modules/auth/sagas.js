import { all, put, takeLatest, call } from 'redux-saga/effects'
import api from '~/services/api'
import history from '~/services/history'
import { signInSuccess, signFailure } from './actions'

function* signIn({ email, password }) {
  try {
    const { data } = yield call(api.post, 'session', { email, password })
    const { token, user } = data

    if (!user.provider) {
      console.tron.error('Usuário não é prestador')
      yield false
    }

    yield put(signInSuccess(token, user))
    history.push('/dash')
  } catch (error) {
    yield put(signFailure())
  }
}

function* Sagas() {
  yield all([
    takeLatest('@auth/SIGN_IN_REQUEST', ({ payload }) => signIn(payload)),
  ])
}

export default Sagas
