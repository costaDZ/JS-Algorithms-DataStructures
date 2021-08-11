
/*======================================*/
// recursions
/*======================================*/

// get the factorial of a number

// function factorial(num) {  //*****===> pure recurtion
//     if (num === 1) return 1;

//     return num * factorial(num - 1);

// }
// console.log(factorial(2));


// function factorial(num) {  //*****===> helper recurtion 

//     let result = 1;

//     function count(num) {
//         if (num === 1) return 1;

//         if (num > 1) {
//             result *= num;
//             count(num - 1);
//         }
//     }
//     count(num)

//     return result;
// }

// console.log(factorial(4));


/**********************************************/
//Write a JavaScript program to find the greatest
// common divisor (gcd) of two positive numbers


// function devisor(a, b) {

//     // make two arr to colecte devisors
//     let arr1 = helper(a);
//     let arr2 = helper(b);

//     // get the big common num between the arr
//     let result = 0;

//     arr1.map(n => {
//         if (arr2.indexOf(n) !== -1) { result = n }
//     })
//     return result;

// }
// //helper
// function helper(num) {
//     let result = []
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// console.log(devisor(336, 360));

// function devisor(a, b) {

//     // make two arr to colecte devisors
//     let data = {};

//     let arg = [...arguments];

//     arg.forEach((a, i) => {
//         data[i] = a
//     })
// }

// console.log(devisor(8, 10));


// let gcd = function (a, b) {

//     if (!b) {
//         return a;
//     }

//     return gcd(b, a % b);
// };
// console.log(gcd(40, 80));

/**********************************************/

// function integers(a, b) {

//     let result = [];

//     function helper(num) {
//         if (num === b) return b;
//         result.push(num)

//         helper(num + 1, b);
//     }

//     helper(a + 1);

//     console.log(result);
// }
// console.log(integers(2, 9));

// function integers(a, b) {
//     let result = [];
//     if (a === b) return b;
//     result.push(a);
//     return result.concat(integers(a + 1, b));
// }

// console.log(integers(2, 9));


/**********************************************/
//4. Write a JavaScript program to compute the sum of an array of integers

// function sum(arr) {
//     let result = arr[0];
//     debugger;
//     if (arr.length === 0) return 0;
//     return result + sum(arr.slice(1));
// }
// console.log(sum([2, 2, 5, 4]));

// function sum1(arr) {
//     let index = 0;
//     let result = arr[0];
//     if (arr.length === 0) return 0;
//     return result + sum1(arr.slice(index + 1));
// }
// console.log(sum1([2, 2, 3, 4]));


// function sum(arr) {
//     if (arr.length === 1) return arr[0];
//     return arr.pop() + sum(arr);
// }

// console.log(sum([1, 5, 6]));

/**********************************************/
// //5. Write a JavaScript program to compute the exponent of a number.


// function exponent(n, exp) {

//     let result = 0;

//     console.log(n);
//     if (exp <= 1) return;


//     result + exponent(n ** exp, exp - 1)

//     return result;

// }

// console.log(exponent(2, 3));



// function exponent(a, b) {

//     //  let expo = num;

//     if (b === 0) { return 1 };
//     //debugger;
//     //console.log(expo);

//     return a * exponent(a, b - 1);

// }

// console.log(exponent(2, 4));
// //8   6   4   2

/**********************************************/

//6. Write a JavaScript program to get the first (n) Fibonacci numbers.


// function fibo(num) {
//     if (num === 0) return [0, 1];
//     let s = fibo(num - 1);
//     s.push(s[s.length - 1] + s[s.length - 2])
//     return s;
// }


// console.log(fibo(8));

// /------------------------------------/

// function fibo(num) {

//     let result = [0, 1];

//     function cont(num) {
//         if (num === 1) return;
//         let newVal = result[result.length - 2] + result[result.length - 1];
//         result.push(newVal);
//         cont(num - 1);
//     }

//     cont(num);
//     return result;
// }
// console.log(fibo(8));

/**********************************************/

//7. Write a JavaScript program to check whether a number is even or not

// function checkEven(num) {

//     if (num === 0) return true;
//     if (num === 1) return false;

//     num = num - 2;
//     console.log(num);
//     return checkEven(num)

// }
// console.log(checkEven(24));

/*******************************************/

//Find the sum of a sequence of numbers recursively.


// function sum(arr) {
//     if (arr.length === 1) return arr[0];
//     return arr[0] + sum(arr.slice(1));
// }

// console.log(sum([10, 5, 20]));



// function addTo(n) {
//     if (n === 1) return 1;

//     return n + addTo(n - 1);
// }

// console.log(addTo(3));



// function factorial(n) {
//     if (n === 1) return 1;
//     return n * factorial(n - 1)
// }


// console.log(factorial(5));

// =======> (((later)))
// // // function findFibonacci(n) {

// // //     let s = 0;

// // //     if (s > n) return;

// // //     return s += findFibonacci(n - 1)
// // // }

// // // console.log(findFibonacci(5));







/********************/

//Write a function that accepts a string a reverses it. Recursively.

// function reverce(str) {
//     let result = [];
//     if (str.length === 0) return "";

//     result = str[0];
//     return reverce(str.slice(1)) + result;
// }

// console.log(reverce("abcde"));


// function map(target) {
//     let result = [];
//     if (target.length === 0) return result;
//     result.push(target[0]);
//     return result.concat(map(target.slice(1)));
// }

// console.log(map(["a", "b", "c"]));



// Write a program that takes an array as input which contains an unknown set of numbers,
// and output an array which doubles the values of each item in that array.
// Test your solution by trying a handful of different arrays.


// function double_all(arr) {
//     if (!arr.length) {
//         return [];
//     }
//     return [arr[0] * 2, ...double_all(arr.slice(1))];
// }

// console.log(double_all([1, 2, 4, 5, 3, 5, 9]));

/*=================================================================================
Exercise 4 - Triangular Number
Calculates the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle.
The nth triangular number is the number of dots composing a triangle with n dots on a side,
and is equal to the sum of the n natural numbers from 1 to n.
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
                          *
            *           *    *
*     |   *   *  |   *    *    *  |
1st       2nd             3rd             nth?
*/
//Should always return n*(n+1)/2

// function Triangular(num) {

//     let result = [];

//     if (num === 0) return [];

//     result.push(num * (num + 1) / 2);

//     return Triangular(num - 1).concat(result);

// }

// console.log(Triangular(15));

// function triangle(n) {
//     if (n < 2) return n;

//     console.log(n);
//     return n + triangle(n - 1);
// }

// console.log(triangle(5));


/*=================================================================================
Exercise 5 - String Splitter
Split a string based upon a separator (similar to String.prototype.split).
*/


// function split(str, separator) {

//     let result = [];
//     let idx = str.indexOf(separator);

//     if (idx === -1) return str;

//     result.push(str.substr(0, idx));

//     return result.concat(split(str.slice(idx + separator.length), separator));

// }

// console.log(split("ab*c*defh*hi*y*y", '*'));


// function split(str, sep) {
//     var idx = str.indexOf(sep);
//     if (idx == -1)
//         return [str];
//     return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
// }
// console.log(split('1/12/2017', '/'));


/*=================================================================================
Exercise 6 - Binary Representation
Write a recursive function that prints out the binary representation of a given number.
For example the program should take 3 as an input and print 11 as output, or 25 as an input
and print 11001 as an output. Note that the binary representation of 0 should be 0.
*/

// function toBinary(n) {
//     if (n === 0) return "";
//     let binary = n % 2;
//     return toBinary(Math.floor(n / 2)) + binary;
// }
// console.log(toBinary(223));


// function convertToBinary(num) {
//     if (num > 0) {
//         let binary = Math.floor(num % 2);
//         return (convertToBinary(Math.floor(num / 2)) + binary);
//     } else {
//         return '';
//     }
// }
// console.log(convertToBinary(223));