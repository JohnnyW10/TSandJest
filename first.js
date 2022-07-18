var num = 12;
function first(a) {
    console.log(a);
}
first(num);
var jan = {
    firstName: "Jan",
    surname: "Wolan"
};
function viewPersonInformation(person) {
    var per = "".concat(person.firstName, " - ").concat(person.surname);
    console.log(per);
    return per;
}
viewPersonInformation(jan);
