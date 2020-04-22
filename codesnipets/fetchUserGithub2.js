const getUser = (user, callback) => {
  fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(json => callback(json, "flag", "error"))
}

const renderUser = res => console.log(res)

getUser("Klaus", json => renderUser(json))
