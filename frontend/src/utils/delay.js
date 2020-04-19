export default (timeToDelay = 1000) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay))
