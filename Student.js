

function Student(name) {

    name = this.name;
    age = this.age;
    address = {
        city: this.city,
        state: this.state
    };
    quarterlyMarks = [
        {
            english: 24,
            tamil: 23
        },
        {
            science: 34,
            tamil: 45
        }
    ];
}

let stud1 = new Student("bhrata");

console.log(stud1)