import { all, put, takeLatest, call } from 'redux-saga/effects'
import { Alert } from 'react-native'
import api from '~/services/api'

import { profileUpdateSuccess, profileUpdateFailed } from './actions'

function* updateProfile({ name, email, ...rest }) {
  try {
    const profile = rest.oldPassword
      ? { name, email, ...rest }
      : { name, email }

    const { data } = yield call(api.put, 'users', profile)

    Alert.alert('Sucesso', 'Dados alterados com sucesso')
    yield put(profileUpdateSuccess(data))
  } catch (error) {
    Alert.alert(
      'Erro',
      'Ocorreu um erro ao alterar seus dados, por favor tente novamente mais tarde',
    )
    yield put(profileUpdateFailed())
  }
}

function* Sagas() {
  yield all([
    takeLatest('@user/PROFILE_UPDATE_REQUEST', ({ payload }) =>
      updateProfile(payload),
    ),
  ])
}

export default Sagas
