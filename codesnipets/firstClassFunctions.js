const hi = name => `Hi ${name}`

const greet = name => hi

const arr = [greet]

const yellGreeting = yell(greet)

greetings = { greet, yellGreeting }