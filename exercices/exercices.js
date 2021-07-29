
/*=============================================*/
// BOB
/*=============================================*/

// Bob answers 'Sure.' if you ask him a question, such as "How are you?".
// He answers 'Whoa, chill out!' if you YELL AT HIM(in all capitals).
// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.

// function bob(talk) {
//     //console.log(talk[talk.length - 1]);
//     let quetion = (talk[talk.length - 1] === '?');
//     let anyThing = talk === '';

//     if (talk.length) {
//         let nrmlQuestion = (talk[0].charCodeAt() > 96) && quetion || null;
//         let yell = (talk[0].charCodeAt() > 64) && (!quetion);
//         let yellQuestion = (talk[0].charCodeAt() > 64) && quetion;

//         if (nrmlQuestion) {
//             return 'Sure.';
//         }
//         if (yell) {
//             return 'Whoa, chill out!';
//         }
//         if (yellQuestion) {
//             return 'Calm down, I know what I\'m doing!.';
//         }
//     }

//     if (anyThing) {
//         return 'Fine. Be that way!.';
//     }

//     return 'Whatever.';
// }

// console.log(bob('sddwfsdf ?'));

/*=============================================*/
// PASCALE TRIANGEL
/*=============================================*/
// Compute Pascal's triangle up to a given number of rows.
// In Pascal's Triangle each number is computed by
// adding the numbers to the right and left of the current position in the previous row.

//      1
//     1 1
//    1 2 1
//   1 3 3 1
//  1 4 6 4 1
// # ...etc

/*************** FIRST SOLUTION *************/
// function pascale(num) {
//     let currentRow = [];
//     let result = []
//     let i = 1;
//     while (i <= num) {
//         let row = countSum(currentRow);
//         result.push([...row]);
//         i++;
//     }
//     return result;
// }

// console.log(pascale(4));


// // //===============>  helper function
// function countSum(arr) {
//     if (arr.length < 2) {
//         arr.push(1);
//         return arr;
//     }

//     let result = [1];
//     arr.forEach((n, index) => {
//         if (arr[index + 1]) result.push(n + arr[index + 1])
//     })
//     result.push(1)
//     return result;
// }

//console.log(countSum([1, 1]));

/*************** SECOND SOLUTION *************/
// const rows = num => {
//     // define an empty arr
//     let row = [];
//     // if the num === 0 we return the empty arr
//     if (num === 0) return [];
//     // loop to the (num)
//     for (let i = 0; i < num; i++) {
//         // creat an empty arr for each loop
//         row[i] = [];
//         // set 1 to the begining of each arr
//         row[i][0] = 1;
//         // set another loop between [1 - i]
//         for (let j = 1; j < i; j++) {
//             // for each row at position j count the value from the previous row two pairs
//             row[i][j] = row[i - 1][j - 1] + row[i - 1][j];
//         }
//         // after the loop we set 0 to the last index
//         row[i][i] = 1;
//     }
//     return row;
// };

// console.log(rows(5));

/*=============================================*/
//  Grade School 
/*=============================================*/

// Given students' names along with the grade that they are in, 
//create a roster for the school.

//In the end, you should be able to:

//Add a student's name to the roster for a grade
/// ===> "Add Jim to grade 2."
//"OK."

// ====> Get a list of all students enrolled in a grade
//== "Which students are in grade 2?"
//"We've only got Jim just now."

// ====> Get a sorted list of all students in all grades.
// ====> Grades should sort as 1, 2, 3, etc., 
// ====> and students within a grade should be sorted alphabetically by name.

// "Who all is enrolled in school right now?"
//"Let me think. We have 

// Anna, 
// Barb,  
// Charlie in grade 1,

// Alex, 
// Peter,  
// Zoe in grade 2 


// Jim in grade 5.

//So the answer is: Anna, Barb, Charlie, Alex, Peter, Zoe and Jim"

//Note that all our students only have one name. (It's a small town, what do you want?)

//---------------------------------//

// an object with student {name + grade}

// creat a ROSTER for the school

//// add student [name + grade] to the ROSTER

//// get a list of all students in a specific grad

//// get a sorted list of all students in all grades [1,2,3] ==> grades
//   [a,b,c] ==> students in the grade


// // creat a ROSTER for the school
// let students = {
//     g44: ["Anna", "Barb", "Charlie"],
//     g325: ["Anna", "Barb", "Charlie"],
//     g5: ["Anna", "Barb", "Charlie"],
//     g2: ["Alex", "Peter", "Zoe"],
//     g1: ["Jim"],
//     g99: ['kamale', 'asia']
// }

// //// add student [name + grade] to the ROSTER
// const addStudents = (name, grade) => {
//     if (students['g' + grade]) {
//         let newList = students['g' + grade].concat(name)
//         students['g' + grade] = newList;
//     } else {
//         students['g' + grade] = new Array().concat(name);
//     }
// }

// addStudents(['khalide', "ahmed", "hossame"], 8);
// addStudents('nadjemou', 100);
// addStudents('ahmed', 10);

// //// get a list of all students in a specific grad
// const getGradeList = (grade) => {
//     for (prop in students) {
//         if (Number(prop.slice(1)) === grade) {
//             return students[prop];
//         }
//     }
//     return 'we don\'t have any stydent in this grade right now '
// }

// getGradeList(10);

// //// get a sorted list of all students in all grades [1,2,3] ==> grades
// //   [a,b,c] ==> students in the grade
// const getSortedList = () => {
//     let result = [];
//     let grades = Object.keys(students);
//     let sortedGrades = sort(grades);
//     sortedGrades.forEach(g => result.push([g, students[g]]))

//     return result;
// }

// console.log(getSortedList());
// // helper function [buble sort]
// function sort(arr) {
//     let noSwap = false;
//     const swap = (arr, idx1, idx2) => {
//         let temp = arr[idx1];
//         arr[idx1] = arr[idx2];
//         arr[idx2] = temp;
//     }

//     for (let i = arr.length - 1; i >= 0; i--) {
//         noSwap = true;
//         let gradeNum = Number(arr[i].slice(1));
//         for (let j = 0; j <= i - 1; j++) {
//             let gradeNum1 = Number(arr[j].slice(1));
//             let gradeNum2 = Number(arr[j + 1].slice(1));
//             if (gradeNum1 > gradeNum2) {
//                 swap(arr, j, j + 1)
//                 noSwap = false;
//             }
//         }

//         if (noSwap) break;
//     }

//     return arr;
// }

