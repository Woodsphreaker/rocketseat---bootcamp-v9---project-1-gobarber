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

export { profileUpdateRequest, profileUpdateSuccess, profileUpdateFailed }
