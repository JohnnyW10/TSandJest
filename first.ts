let num: number = 12;

function first(a: number): void {
  console.log(a);
}

first(num);

let jan = {
  firstName: "Jan",
  surname: "Wolan",
}

interface Person {
  firstName: String,
  surname: String,
}

function viewPersonInformation(person: Person): string {
  let per = `${person.firstName} - ${person.surname}`
  console.log(per)
  return per
}

viewPersonInformation(jan)

