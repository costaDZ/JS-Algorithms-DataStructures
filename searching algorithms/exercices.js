
/*======================================*/
// search Algorithms
/*======================================*/
// binary search
// function search(arr, target) {

//     let lengths = arr.length
//     let n = 0;

//     while (n <= lengths) {
//         //let leftPointer = arr[0];
//         // let rightPointer = arr[arr.length - 1];
//         let middle = arr[Math.floor((arr.length - 1) / 2)]

//         if (target === middle) return true;

//         if (middle > target) arr.splice(arr.indexOf(middle) + 1, arr.length);

//         if (middle < target) arr.splice(0, arr.indexOf(middle));

//         n += 1;
//     }

//     return -1;
// }

// console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 3));


// ============> stringh search

// function stringSearch(str, target) {
//     let result = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str.slice(i, i + target.length) === target) result++;
//     }

//     return result;
// }

// console.log(stringSearch("nadjem eddine jemnadd nadjem eddine jemnadd", "d"));   

/**********************************************/
// function stringSearch(str, target) {
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < target.length; j++) {
//             if (str[i + j] !== target[j]) break;
//             if (j === target.length - 1) result++;
//         }
//     }
//     console.log(result);
// }
// console.log(stringSearch("nadjem eddine  jem", "jem"));





//==========================================
// function binarySearch(arr, target) {

//     // we sort the arr
//     let sortedArr = arr.sort((a, b) => a - b);

//     // console.log(sortedArr);

//     for (let i = 0; i < arr.length; i++) {

//         let middle = Math.floor((sortedArr.length) / 2);

//         console.log(sortedArr);

//         if (sortedArr[middle] > target) {
//             sortedArr = sortedArr.slice(0, middle);
//         }
//         if (sortedArr[middle] < target) {
//             sortedArr = sortedArr.slice(middle);
//         }
//         if (sortedArr[middle] === target) {
//             return target;
//         }
//     }

//     return false;
// }

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9));


// function binarySearch(arr, target) {

//     let start = 0;
//     let end = arr.length - 1;
//     let middle = Math.floor((arr.length - 1) / 2);


//     //  let i = 0;
//     while (((arr.length - 1) > 0) && start !== end) {
//         if (arr[middle] === target) return target;

//         if (arr[middle] > target) {
//             end = middle - 1;
//             middle = Math.floor((start + end) / 2);
//         }

//         if (arr[middle] < target) {
//             start = middle + 1;
//             middle = Math.floor((start + end) / 2);
//         }

//     }

//     return -1;

// }

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 546));


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






//======================================================//



// function binarySearch(arr, target) {
//     let leftIdx = 0;
//     let rightIdx = arr.length - 1;
//     let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     while (arr[middleIdx] !== target && leftIdx !== rightIdx) {
//         if (target > arr[middleIdx]) leftIdx = middleIdx + 1;
//         else rightIdx = middleIdx - 1;
//         middleIdx = Math.floor((leftIdx + rightIdx) / 2);
//     }
//     return target === arr[middleIdx] ? middleIdx : -1;
// }

// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 15, 28, 44], 7));


// function findString(str, target) {
//     let counter = 0;

//     for (let i = 0; i < str.length; i++) {
//         let collect = "";
//         for (char2 of target) {
//             if (str[i] !== char2) break;
//             collect += str[i];
//             i++;
//             if (collect === target) counter++;
//         }
//     }
//     return counter;
// }

// console.log(findString("al in al al alalal bla al bla ", "bla"));