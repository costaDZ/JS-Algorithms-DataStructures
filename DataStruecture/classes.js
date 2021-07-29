
// class Students {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// const amine = new Students('amine', 'bouchama', 25);
// const ahmed = new Students('ahmed', 'aissa');
// const sami = new Students('sami', 'kadour');
// console.log(amine, ahmed, sami);

// ======> class with [[[[[instance methods]]]]]

// class College {
//     constructor(fisttName, lastName, grade, late) {
//         this.fisttName = fisttName;
//         this.lastName = lastName;
//         this.grade = grade;
//         this.late = late;
//         this.seasonPoints = [];
//     }

//     showStudentInfo() {
//         return `First name : ${this.fisttName}.
//         Last name : ${this.lastName}.
//         Grade : ${this.grade}.
//         Late times : ${this.late}.`
//     }

//     setLatetime() {
//         this.late++;
//         if (this.late === 3) {
//             return 'Call student\'s father'
//         }
//         return this.late;
//     }

//     setPoint(point) {
//         this.seasonPoints.push(point);
//         return this.seasonPoints;
//     }

//     clacPointAvrage() {
//         return this.seasonPoints.reduce((acc, val) => (acc += val), 0) / this.seasonPoints.length;
//     }
// }
// const amine = new College('amine', 'bouchama', 2, 0);
// const ahmed = new College('ahmed', 'aissa', 1, 0);
// const sami = new College('sami', 'kadour', 1, 0);

// console.log(amine.showStudentInfo());
// console.log(amine.setLatetime());
// console.log(amine.setLatetime());
// console.log(amine.setLatetime());

// console.log(amine.setPoint(10));
// console.log(amine.setPoint(10));
// console.log(amine.setPoint(10));

// console.log(amine.clacPointAvrage());

// console.log(amine);



// ======> class with [[[[[class methods]]]]]


