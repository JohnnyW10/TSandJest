

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
