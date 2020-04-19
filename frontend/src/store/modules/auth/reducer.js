const INITIAL_STATE = {
  token: null,
  user: null,
  signed: false,
  loading: false,
}

const Auth = (state = INITIAL_STATE, action) => {
  const { type } = action

  const actions = {
    '@auth/SIGN_IN_REQUEST': () => {
      return { ...state, loading: true }
    },
    '@auth/SIGN_IN_SUCCESS': ({ payload }) => {
      const { token } = payload
      return { ...state, token, signed: true, loading: false }
    },
    '@auth/SIGN_FAILURE': () => {
      return { ...state, loading: false }
    },
    '@auth/SIGN_UP_REQUEST': () => {
      return { ...state, loading: true }
    },
    default: () => state,
  }

  return (actions[type] || actions.default)(action)
}

export default Auth
