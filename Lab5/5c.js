const courses = ["GRK", "ZPR", "TIN", "PRO_3D", "HIS", "BYT"];

function Student(id, name, surname) {
    this.index = id;
    this.name = name;
    this.surname = surname;
}
Student.prototype.courses = courses;
const s = new Student(21040, "Valeriia", "Hordok");
console.log(s.courses);
console.log(s)