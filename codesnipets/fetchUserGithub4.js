const getUser = (user, callback) => {
  fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(json => callback(json, "flag", "error"))
}

const renderUser = (res, error) => console.log(res, error)

getUser("Klaus", renderUser)
