
const foblers = ['Wiebke', 'Lukas', 'Bianca', 'Vidyu', 'Sylwya', 'Joel',
'Dominik', 'Pascal', 'Marcel', 'Felix', 'Andre', 'Kathi']

const sayWordTo = (word, name) => name => `${word} ${name}`

const sayHiTo = sayWordTo('Hi')

foblers.map(sayHiTo)