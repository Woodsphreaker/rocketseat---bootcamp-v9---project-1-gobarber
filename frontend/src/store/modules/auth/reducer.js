const INITIAL_STATE = {}

const Auth = (state = INITIAL_STATE, action) => {
  const { type } = action

  const actions = {
    '@auth/SIGN_IN_SUCCESS': ({ payload }) => {
      // console.tron.log('Lorem Ipsum', payload)
      const { token, user } = payload
      return { ...state, token, signed: true }
    },
    default: () => state,
  }

  return (actions[type] || actions.default)(action)
}

export default Auth
