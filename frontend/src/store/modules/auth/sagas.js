import { all, put, takeLatest, call } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'
import history from '~/services/history'
import { signInSuccess, signFailure } from './actions'

function* signIn({ email, password }) {
  try {
    const { data } = yield call(api.post, 'session', { email, password })
    const { token, user } = data

    if (!user.provider) {
      toast.error('Usuário não é prestador')
      yield false
    }

    toast.success('Login efetuado com sucesso. Bem vindo(a) !')
    yield put(signInSuccess(token, user))
    history.push('/dash')
  } catch (error) {
    toast.error(
      'Erro ao fazer login. Verifique seu usuário e senha e tente novamente '
    )
    yield put(signFailure())
  }
}

function* Sagas() {
  yield all([
    takeLatest('@auth/SIGN_IN_REQUEST', ({ payload }) => signIn(payload)),
  ])
}

export default Sagas
