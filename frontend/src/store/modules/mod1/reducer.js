const INITIAL_STATE = []

const Mod1 = (state = INITIAL_STATE, action) => {
  const { type } = action
  const actions = {
    '@Mod1Add': () => {
      return [...state, action.newData]
    },
    '@Mod1Remove': () => {
      return state.slice(0, -1)
    },
    default: () => {
      return state
    },
  }

  return (actions[type] || actions.default)()
}

export default Mod1
