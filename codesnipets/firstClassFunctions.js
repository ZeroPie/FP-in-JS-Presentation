const sayHi = name => `Hi ${name}`

map(sayHi)

const arr = [ sayHi, '2', {} ]

const randomObj = { ...arr }

