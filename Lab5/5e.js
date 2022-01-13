class Student {
    constructor(id, grades) {
        this.name = "";
        this.surname = "";
        this.id = id;
        this.grades = grades;
    }

    get fullName() {
        return this.name + " " + this.surname;
    }

    set fullName(name) {
        let splitName = name.split(" ");
        this.name = splitName[0] || "";
        this.surname = splitName[1] || "";
    }

    get gradeAverage() {
        let res = 0;
        for (let i = 0; i < this.grades.length; i++) {
            res += this.grades[i];
        }
        return res / this.grades.length;
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
}
const s = new Student(21040, [5, 4, 5, 5]);
s.fullName = "Valeriia Hordok";
console.log("Student :  " + s.fullName + " , Average grade - " + s.gradeAverage);
console.log(s.print);