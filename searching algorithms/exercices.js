
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