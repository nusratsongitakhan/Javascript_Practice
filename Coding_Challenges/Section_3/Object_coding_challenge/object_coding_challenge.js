const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {

        console.log(`${this.firstName} is a ${this.calcAge()}-years old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`);
    }
};

//part 1
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

//part 2
jonas.getSummary();
