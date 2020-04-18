const Add = (user) => {
  return {
    type: '@user/ADD_USER',
    payload: user,
  }
}

export { Add }
