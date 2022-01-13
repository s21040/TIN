let student = {
    id: 21040,
    firstName: "Valeriia",
    lastName : "Hordok",
    info : function() {
        return this.id + "" + this.firstName + " " + this.lastName;
    },
    changeId : function() {
        let id = Math.random();
        return this.id;
    }
};

function showStudent() {
    for (let i in student) {
        console.log(student[i] + " is of type ->  " + typeof student[i]);
    }
}
console.log(showStudent());
console.log(student);