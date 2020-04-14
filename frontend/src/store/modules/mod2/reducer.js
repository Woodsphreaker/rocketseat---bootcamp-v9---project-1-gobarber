const Mod2 = (state = [], action) => {
  const { type } = action
  const actions = {
    '@Mod2Add': () => {
      console.log('Mod2Add')
    },
    '@Mod2Remove': () => {
      console.log('Mod2Remove')
    },
    default: () => {
      console.log('Mod2Default')
      return state
    },
  }

  return (actions[type] || actions.default)()
}

export default Mod2
