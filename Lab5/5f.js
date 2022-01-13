class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }

    set fullName(name) {
        let splitName = name.split(" ");
        this.name = splitName[0] || "";
        this.surname = splitName[1] || "";
    }
}

class Student extends Person {
    constructor(id, name, surname, grades) {
        super(name, surname);
        this.id = id;
        this.grades = grades;
    }

    get print() {
        return (
            "Id - " +
            this.id +
            ", Student : " +
            this.name +
            " " +
            this.surname +
            ", Average grade - " +
            this.gradeAverage
        );
    }

    get gradeAverage() {
        let res = 0;
        for (let i = 0; i < this.grades.length; i++) {
            res += this.grades[i];
        }
        return res / this.grades.length;
    }

}
const s = new Student(21040, "Valeriia", "Hordok", [5, 4, 5, 5]);
s.fullName = "Valeriia Hordok";
console.log("Student :  " + s.fullName + " , Average grade - " + s.gradeAverage);
console.log(s.print);