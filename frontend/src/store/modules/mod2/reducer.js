const INITIAL_STATE = []

const Mod2 = (state = INITIAL_STATE, action) => {
  const { type } = action
  const actions = {
    '@Mod2Add': () => {
      console.log('Mod2Add')
      return [...state, action.newData]
    },
    '@Mod2Remove': () => {
      console.log('Mod2Remove')
      return state.slice(0, -1)
    },
    default: () => {
      console.log('Mod2Default')
      return state
    },
  }

  return (actions[type] || actions.default)()
}

export default Mod2
