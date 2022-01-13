function Student(name, surname, id, grades) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;
    this.showStudent = function () {
        let gradesAverage = 0.0;
        for (let i = 0; i < this.grades.length; i++) {
            gradesAverage += this.grades[i];
        }
        gradesAverage = gradesAverage / this.grades.length;
        return (
            "Id - " +
            this.id +
            ", Name - " +
            this.name +
            ", Surname - " +
            this.surname +
            ", Average grade - " +
            gradesAverage
        );
    };
}

const s21040 = new Student("Valeriia", "Hordok", 21040, [4, 5, 3.5, 5]);
const s21186 = new Student("Valeriia", "Zinevich", 21186, [5, 5, 4.5, 5]);
console.log(s21040.showStudent());
console.log(s21186.showStudent());