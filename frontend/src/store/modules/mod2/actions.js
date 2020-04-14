const AddMod2 = (data) => ({
  type: '@Mod2Add',
  ...data,
})

const RemoveMod2 = (data) => ({
  type: '@Mod2Remove',
  ...data,
})

export { AddMod2, RemoveMod2 }
