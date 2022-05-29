const username: string = 'carlos'

const sum = (a: number, b: number) => {
  return a + b
}

sum(1, 4)

class Person {
  age: number
  lastanem: string

  constructor(age: number, lastname: string) {
    this.age = age
    this.lastanem = lastname
  }
}

const carlos = new Person(15, 'parra')
