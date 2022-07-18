

interface Person {
  name: String,
  surname: String,
  mail?: String,
  login: String,
  password: String,
  age?: number,
  adres?: String,
  houseNumber?: number
}

function addSomePerson(person: Person): void {
  let arr: Person[] = [];
  arr.push(person)
  console.log(arr)
}


  let jan:Person = {
    name: "Jan",
    surname: "Wolan",
    login: "jayjayW",
    password: "jayW.com",
    age: 22,
  }
  let another: Person= {
    name: "Jaco",
    surname: "Krochmalson",
    login: "ebeb",
    password: "jaYup",
    age: 46,
  }


  addSomePerson(another)

  function calculator(a:number, b:number, c:string): number {
    if(c === 'adding') {
      console.log(a+b)
      return a + b
    } else if (c === 'subtraction') {
      console.log(a-b)
      return a - b
    } else if( c === 'multiplication') {
      console.log(a*b)
      return a*b
    } else if(c === 'division') {
      console.log(a/b)
      return a/b
    } else if(c === 'square') {
      console.log(a*a)
      return a*a
    }
    return 0
  }


calculator(4,4, 'adding')
calculator(4,4, 'subtraction')
calculator(4,4, 'multiplication')
calculator(4,4, 'division')
calculator(4,4, 'square')

module.exports = calculator