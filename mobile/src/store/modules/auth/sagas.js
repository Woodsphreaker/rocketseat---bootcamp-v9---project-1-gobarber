import { all, put, takeLatest, call } from 'redux-saga/effects'
import { Alert } from 'react-native'
import api from '~/services/api'
// import history from '~/services/history'
import { signInRequest, signInSuccess, signFailure } from './actions'
import { setToken } from '~/utils/tokenManagement'

import delay from '~/utils/delay'

function* signIn({ email, password }) {
  try {
    const { data } = yield call(api.post, 'session', { email, password })
    const { token, user } = data

    if (user.provider) {
      Alert.alert('Erro', 'Usuário não pode ser um prestador')
      yield false
    }

    Alert.alert(
      'Sucesso',
      `Login efetuado com sucesso. Bem vindo(a) ${user.name}`,
    )
    setToken(token)
    yield put(signInSuccess(token, user))
    // history.push('/dash')
  } catch (error) {
    Alert.alert(
      'Erro',
      'Erro ao fazer login. Verifique seu usuário e senha e tente novamente',
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
    })

    Alert.alert(
      'Sucesso',
      'Cadastro efetuado com sucesso, tentando fazer login',
    )
    yield call(delay, 3000)
    yield put(signInRequest(email, password))
    // yield signIn(email, password)
  } catch (error) {
    Alert.alert(
      'Erro',
      'Ocorreu um erro no momento de seu cadastro. Tente novamente mais tarde',
    )
    yield put(signFailure())
  }
}

const signOut = () => {
  // history.push('/')
}

function* Sagas() {
  yield all([
    takeLatest('@auth/SIGN_IN_REQUEST', ({ payload }) => signIn(payload)),
    takeLatest('@auth/SIGN_UP_REQUEST', ({ payload }) => signUp(payload)),
    takeLatest('@auth/SIGN_OUT', () => signOut()),
  ])
}

export default Sagas
