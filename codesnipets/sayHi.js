const fob = ['Wiebke', 'Lukas', 'Bianca', 'Sylwya', 'Vidyu',
  'Marcel', 'Joel', 'Pascal', 'Dominik',
  'Andre', 'Mark', 'Felix']

const sayWordTo = (word, name) =>
  name => `${word} ${name}`

const sayHiTo = sayWordTo('Hi')

fob.map(sayHiTo)
