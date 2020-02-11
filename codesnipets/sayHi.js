const sayHiTo = name => `Hi ${name}`

const sayWordTo = (word, name) => `${word} ${name}`

const sayByeToFob = sayWordTo('bye', 'fob')

const sayWordTo = (word, name) => name => `${word} ${name}`

const sayByeTo = sayWordTo('Bye')
const sayOiTo = sayOiTo('Oi')

['Wiebke', 'Lukas', 'Bianca', 'Sylwya', 'Joel'].map(sayOiTo)