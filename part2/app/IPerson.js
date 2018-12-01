var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var ip = new Person("John", "Abraham");
var fullName = ip.getFullName();
console.log("Full Name of the person : ", fullName);
