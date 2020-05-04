const profileUpdateRequest = (userAttributes) => {
  return {
    type: '@user/PROFILE_UPDATE_REQUEST',
    payload: userAttributes,
  }
}

const profileUpdateSuccess = (userProfile) => {
  return {
    type: '@user/PROFILE_UPDATE_SUCCESS',
    payload: userProfile,
  }
}

const profileUpdateFailed = () => {
  return {
    type: '@user/PROFILE_UPDATE_FAILED',
  }
}

const signOut = () => {
  return {
    type: '@auth/SIGN_OUT',
  }
}

export {
  profileUpdateRequest,
  profileUpdateSuccess,
  profileUpdateFailed,
  signOut,
}
