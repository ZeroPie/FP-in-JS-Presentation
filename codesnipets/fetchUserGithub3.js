const getUser = (user, callback) => {
  fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(json => callback(json, "flag", "error"))
}

const renderUser = (res, flag, error) =>
  console.log(`${res} ${flag}`, error)

getUser("Klaus", (json, flag, error) =>
  renderUser(json, flag, error)
)
