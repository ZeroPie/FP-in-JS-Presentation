const sayHiTo = name => `Hi ${name}`

map(sayHiTo)

const bidFarewellTo = name => `Bye ${name}`

const greet = name => hiTo

const greetings = [ greet, bidFarewellTo ]

const greeTingsObj = { ...greetings }
