const INITIAL_STATE = {}

const Auth = (state = INITIAL_STATE, action) => {
  const { type } = action

  const actions = {
    '@Ac1': () => {},
    '@Ac2': () => {},
    default: () => state,
  }

  return (actions[type] || actions.default)()
}

export default Auth
