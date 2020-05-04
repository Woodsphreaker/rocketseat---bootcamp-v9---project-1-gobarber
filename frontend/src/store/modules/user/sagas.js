import { all, put, takeLatest, call } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '~/services/api'

import { profileUpdateSuccess, profileUpdateFailed } from './actions'

function* updateProfile({ name, email, avatar_id, ...rest }) {
  try {
    const profile = rest.oldPassword
      ? { name, email, avatar_id, ...rest }
      : { name, email, avatar_id }

    const { data } = yield call(api.put, 'users', profile)

    toast.success('Dados alterados com sucesso')
    yield put(profileUpdateSuccess(data))
  } catch (error) {
    toast.error(
      'Ocorreu um erro ao alterar seus dados, por favor tente novamente mais tarde'
    )
    yield put(profileUpdateFailed())
  }
}

function* Sagas() {
  yield all([
    takeLatest('@user/PROFILE_UPDATE_REQUEST', ({ payload }) =>
      updateProfile(payload)
    ),
  ])
}

export default Sagas
