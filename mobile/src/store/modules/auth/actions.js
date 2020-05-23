const signInRequest = (email, password) => {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  }
}

const signInSuccess = (token, user) => {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  }
}

const signFailure = () => {
  return {
    type: '@auth/SIGN_FAILURE',
  }
}

const signUpRequest = (name, email, password) => {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      name,
      email,
      password,
    },
  }
}

export { signInRequest, signInSuccess, signFailure, signUpRequest }
