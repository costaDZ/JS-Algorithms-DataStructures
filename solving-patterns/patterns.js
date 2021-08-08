// a function accept two arr , and return
// true if the arr1 or the arr2 have the corresponding value squared in the other one
// return false if it's not


// function check(arr1, arr2) {
//     for (let n of arr1) {
//         if (arr2.includes(Math.sqrt(n))) return [true, Math.sqrt(n)];
//     }
//     for (let n of arr2) {
//         if (arr1.includes(Math.sqrt(n))) return [true, Math.sqrt(n)];
//     }
// }

// console.log(check([3, 61, 2], [4, 5, 36, 1]));

// function same(arr1, arr2) {
//     //check if arr1 + arr2 have the same length
//     if (arr1.length !== arr2.length) {
//         return false
//     }

//     // make two new objects
//     let obj1 = {};
//     let obj2 = {};

//     // add the arr1 values = keys && values = repetition
//     // add the arr2 values = keys && values = repetition
//     for (let n of arr1) { obj1[n] = (obj1[n] || 0) + 1; }
//     for (let n of arr2) { obj2[n] = (obj2[n] || 0) + 1; }
//     for (let n in obj1) {
//         if (!(n ** 2 in obj2)) { return false; }
//         if (obj2[n ** 2] !== obj1[n]) { return false; }
//     }
//     return true;
// }

// console.log(same([1, 2, 2], [4, 4, 1]));


//check if the arr1 + arr2 length is equale
// if false return false

// if true
// loop around arr length
// check if each axponent item in arr1 existe in arr2 indexOf()
// if -1 return false
// if it existe remove the sepecific item splice()
// return true



//check if str2 is the anagram of the str1
// function anagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     // define two empty objects
//     let obj1 = {};
//     let obj2 = {};
//     // add each char and it's repetition
//     for (l of str1) { obj1[l] = (obj1[l] || 0) + 1; }
//     for (l of str2) { obj2[l] = (obj2[l] || 0) + 1; }

//     console.log(obj1, obj2);
//     // check if each key has the same repetition in the second object
//     for (let n in obj1) {
//         if (!obj2.hasOwnProperty(n)) { return false; }
//         if (obj1[n] !== obj2[n]) { return false; }
//     }
//     return true;
// }

// console.log(anagram('abceafk', 'abcakfe'));


/*======================================*/
// Pointers
/*======================================*/
// function sumZero(arr) {
//     let rightindex = 1;
//     let leftindex = 0;

//     for (let n in arr) {
//         let big = arr[arr.length - rightindex];

//         let small = arr[leftindex];

//         if (big + small > 0) { rightindex += 1; }

//         if (big + small < 0) { leftindex += 1; }

//         if (big + small === 0) { return [big, small]; }
//     }
// }

// console.log(sumZero([-6, -3, -2, -1, 5, 1, 2, 3, 5, 7]));



// function contUniqueValues(arr) {
//     if (arr.length === 0) return 0;

//     // define a 2 empty variable (acc + result);
//     let acc = arr[0];
//     let result = 1;
//     // set the first value to my var
//     for (n of arr) {
//         if (acc !== n) {
//             result += 1;
//             acc = n;
//         }
//     }
//     return result;
// }

// contUniqueValues([2, 5, 3, 3, 3, 4])

// function contUniqueValues(arr) {
//     let a = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[a] !== arr[i]) {
//             a++;
//             arr[a] = arr[i];

//         }
//     }
//     return a;
// }

// contUniqueValues([2, 2, 8, 5, 7, 9, 8, 9])


/*======================================*/
// sliding window
/*======================================*/
// get a num and check in the arr for
//the chain involve that num can give us the max num


// function maxSum(arr, num) {
//     // craet the first sum variable the window
//     let result = 0;
//     let acc = 0;
//     // lopp in the num and we get the sum from it
//     for (let i = 0; i < num; i++) {
//         acc += arr[i];
//     }

//     // assign the sum to another var
//     for (let j = num; j < arr.length; j++) {
//         acc = acc - arr[j - num] + arr[j];
//         if (acc > result) { result = acc; }
//     }
//     return result;
// }

// maxSum([2, 6, 5, 1], 3); // =========> O(n) good solutio [linear]



//=================================================== Frequency Countrers

// a function accept two arr , and return
// true if the arr1 or the arr2
// have the corresponding value squared in the other one
// return false if it's not

// function checkValues(arr1, arr2) {

//     let ob1 = {};
//     let ob2 = {};

//     for (let i of arr1) { ob1[i] ? ob1[i] += 1 : ob1[i] = 1 }

//     for (let i of arr2) { ob2[i] ? ob2[i] += 1 : ob2[i] = 1 }

//     for (prop in ob1) { if (ob2[prop ** 2]) return true }

//     for (prop in ob2) { if (ob1[prop ** 2]) return true }

//     return false;
// }

// console.log(checkValues([1, 2, 4, 5], [10, 38, 52, 100, 55, 100]));



// check if str2 is the anagram of the str1

// function anagram(str1, str2) {
//     let obj1 = {};
//     let obj2 = {};

//     for (l of str1) { obj1[l] = (obj1[l] || 0) + 1 }
//     for (l of str2) { obj2[l] = (obj2[l] || 0) + 1 }
//     for (prop in obj1) {
//         if (obj1[prop] !== obj2[prop]) return false;
//     }
//     return true;
// }

// console.log(anagram("abcde", "ebcda"));

//=================================================== Miltuple Pointers

// function sumZero(arr) {
//     let pointer1 = 0;
//     let pointer2 = arr.length - 1;
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[pointer1] + arr[pointer2] === 0) {
//             return [arr[pointer1], arr[pointer2]]
//         }
//         if (arr[pointer1] + arr[pointer2] > 0) {
//             pointer2 -= 1;
//         }
//         if (arr[pointer1] + arr[pointer2] < 0) {
//             pointer1 += 1;
//         }
//         i++;
//     }
// }
// console.log(sumZero([-8, -2, -1, 0, 1, 2, 3, 5, 6]));

//====================//

// function uniqueValues(arr) {
//     let pointer1 = 0;
//     let pointer2 = pointer1 + 1;
//     let result = 0;
//     while (pointer1 < arr.length) {
//         if (arr[pointer1] !== arr[pointer2]) {
//             result++;
//             pointer1 = pointer2;
//             pointer2++;
//         } else {
//             pointer2++;
//         }

//     }
//     console.log(result);
// }
// console.log(uniqueValues([1, 2, 3, 3, 4, 8, 8, 8]));



//====================//

// function maxSum(arr, num) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr.slice(i, num + i).length > num - 1) {
//             result.push(arr.slice(i, num + i));
//         }
//     }
//     console.log(result);

//     let finalResult = result.reduce((acc, val) => {
//         let valSum = val.reduce((acc, n) => acc += n, 0);
//         if (valSum > acc) {
//             acc = valSum;
//         }

//         return acc;
//     }, 0)

//     console.log(finalResult);
// }

// maxSum([2, 6, 9, 2, 1, 5, 14], 2); // =========> bad solution


// function maxSum(arr, num) {
//     // craet the first sum variable the window
//     let result = 0;
//     let acc = 0;
//     // lopp in the num and we get the sum from it
//     for (let i = 0; i < num; i++) {
//         acc += arr[i];
//     }

//     // assign the sum to another var
//     for (let j = num; j < arr.length; j++) {
//         acc = acc - arr[j - num] + arr[j];
//         if (acc > result) { result = acc; }
//     }

//     console.log(result);
// }

// maxSum([2, 6, 9, 2, 1], 3); // =========> O(n) good solutio [linear]