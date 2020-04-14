const Add = (data) => ({
  type: '@Mod1Add',
  ...data,
})

const Remove = (data) => ({
  type: '@Mod1Remove',
  ...data,
})

export { Add, Remove }
