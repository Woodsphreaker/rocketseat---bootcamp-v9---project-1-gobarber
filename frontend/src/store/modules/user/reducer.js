const INTIAL_STATE = {
  profile: null,
}

const User = (state = INTIAL_STATE, action) => {
  const { type } = action

  const actions = {
    '@auth/SIGN_IN_SUCCESS': ({ payload }) => {
      const { user } = payload
      return { ...state, profile: user }
    },
    default: () => state,
  }

  return (actions[type] || actions.default)(action)
}

export default User
