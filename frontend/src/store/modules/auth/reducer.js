const INITIAL_STATE = {
  token: null,
  user: null,
  signed: false,
}

const Auth = (state = INITIAL_STATE, action) => {
  const { type } = action

  const actions = {
    '@auth/SIGN_IN_SUCCESS': ({ payload }) => {
      const { token, user } = payload
      return { ...state, token, user, signed: true }
    },
    default: () => state,
  }

  return (actions[type] || actions.default)(action)
}

export default Auth
