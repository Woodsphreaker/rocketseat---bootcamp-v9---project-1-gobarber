import { all, put, takeLatest, call } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'
import history from '~/services/history'
import { signInRequest, signInSuccess, signFailure } from './actions'

import delay from '~/utils/delay'

function* signIn({ email, password }) {
  try {
    const { data } = yield call(api.post, 'session', { email, password })
    const { token, user } = data

    if (!user.provider) {
      toast.error('Usuário não é prestador')
      yield false
    }

    toast.success(`Login efetuado com sucesso. Bem vindo(a) ${user.name} !`)
    yield put(signInSuccess(token, user))
    history.push('/dash')
  } catch (error) {
    toast.error(
      'Erro ao fazer login. Verifique seu usuário e senha e tente novamente '
    )
    yield put(signFailure())
  }
}

function* signUp({ name, email, password }) {
  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    })

    toast.info('Cadastro efetuado com sucesso, tentando fazer login')
    yield call(delay, 3000)
    yield put(signInRequest(email, password))
  } catch (error) {
    toast.error(
      'Ocorreu um erro no momento de seu cadastro. Tente novamente mais tarde '
    )
    yield put(signFailure())
  }
}

function* Sagas() {
  yield all([
    takeLatest('@auth/SIGN_IN_REQUEST', ({ payload }) => signIn(payload)),
    takeLatest('@auth/SIGN_UP_REQUEST', ({ payload }) => signUp(payload)),
  ])
}

export default Sagas
