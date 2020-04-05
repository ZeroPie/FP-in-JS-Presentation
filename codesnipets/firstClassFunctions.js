const sayHi = name => `Hi ${name}`

map(sayHi)

const randomArr = [ sayHi, '2', {} ]

const randomObj = { ...randomArr }
