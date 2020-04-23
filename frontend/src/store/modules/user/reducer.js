const INTIAL_STATE = {
  profile: null,
}

const User = (state = INTIAL_STATE, action) => {
  const { type } = action

  const actions = {
    '@user/PROFILE_UPDATE_REQUEST': () => {
      return { ...state, loading: true }
    },
    '@auth/SIGN_IN_SUCCESS': ({ payload }) => {
      const { user } = payload
      return { ...state, profile: user }
    },
    '@user/PROFILE_UPDATE_SUCCESS': ({ payload }) => {
      return { ...state, profile: payload, loading: false }
    },
    default: () => state,
  }

  return (actions[type] || actions.default)(action)
}

export default User
