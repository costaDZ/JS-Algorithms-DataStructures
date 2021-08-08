
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


var gcd = function (a, b) {

    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};
console.log(gcd(40, 80));

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

/**********************************************/
//4. Write a JavaScript program to compute the sum of an array of integers

// function sum(arr) {
//     let index = 0;
//     let result = arr[0];

//     if (arr.length === 0) return 0;

//     return result + sum(arr.slice(index + 1));
// }

// console.log(sum([1]));


// function sum(arr) {
//     if (arr.length === 1) return arr[0];
//     return arr.pop() + sum(arr);
// }

// console.log(sum([1, 5]));

/**********************************************/
// //5. Write a JavaScript program to compute the exponent of a number.

// function exponent(a, b) {

//     //  let expo = num;

//     if (b === 0) { return 1 };

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


/**********************************************/
//8. Write a JavaScript program for binary search

// function binarySearch(arr, target) {

//     if (arr.length === 0) return;

//     let start = 0;
//     let end = arr.length - 1;
//     let middle = Math.floor((start + end) / 2);

//     for (let n in arr) {

//         if (arr[middle] > target) {
//             end = middle - 1;
//             middle = Math.floor((start + end) / 2)
//         }
//         if (arr[middle] < target) {
//             start = middle + 1;
//             middle = Math.floor((start + end) / 2)
//         }

//         if (arr[middle] === target) {
//             return middle;
//         }
//     }

// }

// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 48, 55], 55));


// srach about a target in an array using binary search + recurtion
// binary search mean i will devide the arr by 2 equal sizes
// and look at the value for both of theme
// if the value it's in the first section i will cut the seconde and vers versa
// finaly when i find the value i will return it else i will return -1

// function binarySearch(arr, target) {

//     // set the start point
//     let start = 0;
//     // set the end point
//     let end = arr.length - 1;
//     // set the middle point
//     let middle = Math.floor((start + end) / 2);
//     let result;

//     //set a helper function
//     function helper(arr) {
//         console.log(arr[middle], start);
//         if (arr[middle] === target || arr[end] === target || arr[start] === target) {
//             result = target;
//             return;
//         }
//         // set the base case if (arr.length === 0) return -1;
//         if (start === middle && middle !== target) {
//             result = -1;
//             return;
//         }
//         //check if the arr[middle point] or arr[start point] or arr[end point]  > or < (target)
//         if (arr[middle] > target) {
//             end = middle;
//             middle = Math.floor((start + end) / 2);
//             helper(arr);
//         }
//         if (arr[middle] < target) {
//             console.log(true);
//             start = middle;
//             middle = Math.floor((start + end) / 2);
//             helper(arr);
//         }
//     }
//     helper(arr);
//     return result;
// }

// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 28, 44], 44));

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