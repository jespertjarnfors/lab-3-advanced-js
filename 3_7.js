function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.toString = function () {
        return `${this.name}, ${this.age}, ${this.gender}`
    }
    }
    const person1 = new Person('James Brown', 73, 'male')

    const person2 = new Person('John Douglas', 43, 'male')

    console.log(person1.toString());
    console.log(person2.toString());

    function Student (name, age, gender, cohort) {
        Person.call(this, name ,age, gender)
        this.cohort = cohort;
        this.toString = function () {
            return `${this.name}, ${this.age}, ${this.gender}, ${this.cohort}`
        }
    }

    Object.setPrototypeOf(Student, Person);

    const student1 = new Student("Jeanette Eagle", 22, "female","Software Engineer")
    const student2 = new Student("Jesper Tjarnfors", 28, "male", "Javascript")

    console.log(student1.toString());
    console.log(student2.toString());



    