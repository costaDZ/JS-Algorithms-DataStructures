/*=========================*/
//** bubble sorting **//
/*=========================*/
/**********************************************/
// Write a merge sort program in JavaScript.

// function sortArr(arr) {
//     let noSwaps = false;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         noSwaps = true;
//         for (let j = 0; j <= i - 1; j++) {
//             console.log(arr);

//             if (arr[j] > arr[j + 1]) {
//                 swape(arr, j, j + 1);
//                 noSwaps = false;
//             }
//         }

//         if (noSwaps) break;
//     }

// }

// function swape(arr, idx1, idx2) {
//     let temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
// }
// // ========> ES6
// // function swape(arr, idx1, idx2) {
// //     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// // }


// console.log(sortArr([8, 7, 6, 7, 8, 9]));

/**********************************************/
// function sort(arr) {
//     let base = 0;
//     let index = arr.length - 1;
//     let isSwarp = false;
//     while (index > base) {
//         isSwarp = true;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 isSwarp = false;
//             }
//         }
//         index--;
//         if (isSwarp) base = arr.length;
//     }

//     return arr;
// }

// console.log(sort([8, 7, 6, 7, 8, 9]));

/*=========================*/
//** selection sorting **//
/*=========================*/
// function sort(arr) {

//     for (let i = 0; i < arr.length - 1; i++) {
//         let smallest = i;

//         console.log(arr);

//         for (let j = i + 1; j < arr.length - 1; j++) {
//             console.log(arr);

//             if (arr[j] < arr[smallest]) {
//                 smallest = j;
//             }
//         }

//         if (i !== smallest) {
//             let temp = arr[i];
//             arr[i] = arr[smallest];
//             arr[smallest] = temp;

//         }

//     }

//     console.log(arr);
// }

// console.log(sort([8, 3, 4, 2, 10, 15]));


/**************************/
// function sort(arr) {
//     const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

//     for (let i = 0; i < arr.length; i++) {
//         let small = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[small]) {
//                 small = j;
//             }
//         }
//         swap(arr, i, small)
//     }
//     return arr;
// }

// console.log(sort([8, 3, 4, 2, 1, 0]));

/*=========================*/
//** insertion sorting **//
/*=========================*/

// function insertionSort(arr) {

//     for (let i = 1; i < arr.length; i++) {
//         let target = arr[i];

//         for (let j = i - 1; j >= 0 && arr[j] > target; j--) {
//             let temp = arr[j + 1]
//             arr[j + 1] = arr[j];
//             arr[j] = temp;
//         }
//     }

//     return arr;

// }

// console.log(insertionSort([8, 3, 4, 2, 1, 0, 5, 55, 1.5]));

/*************************************/

//---------------------------//
// bubble sort
//---------------------------//
//==============> 01
// function sortArr(arr) {
//     const swap = (arr, idx1, idx2) => {
//         let temp = arr[idx1];
//         arr[idx1] = arr[idx2];
//         arr[idx2] = temp;
//     }

//     for (let i = 0; i < arr.length - 1; i++) {

//         for (let j = 0; j < arr.length - (i + 1); j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1)
//             }
//         }
//     }
//     console.log(arr);
// }
// console.log(sortArr([8, 7, 6, 7, 8, 9]));


//==============> 02

// function sortArr(arr) {
//     const swap = (arr, idx1, idx2) => {
//         let temp = arr[idx1];
//         arr[idx1] = arr[idx2];
//         arr[idx2] = temp;
//     }

//     let j = 0;
//     while (j < arr.length) {
//         for (let i = 0; i < arr.length - (j + 1); i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap(arr, i, i + 1);
//             }
//         }
//         j++;
//     }
//     console.log(arr);
// }
// console.log(sortArr([8, 55, 47, 33, 100, 7, 6, 7, 8]));


//==============> 03

// function sortArr(arr) {
//     const swap = (arr, idx1, idx2) => {
//         let temp = arr[idx1];
//         arr[idx1] = arr[idx2];
//         arr[idx2] = temp;
//     }
//     let j = arr.length - 1;
//     while (j >= 0) {
//         for (let i = arr.length - 1; i >= (j + 1); i--) {
//             console.log(i);
//             console.log(arr[i], arr[i - 1]);
//             if (arr[i] < arr[i - 1]) {
//                 swap(arr, i, i - 1);
//             }
//         }
//         j--;
//     }
//     console.log(arr);
// }
// console.log(sortArr([8, 55, 47, 33]));




//---------------------------//
// Selection Sort 
//---------------------------//

// function selectionSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//         let temp = arr[idx1];
//         arr[idx1] = arr[idx2];
//         arr[idx2] = temp;
//     }

//     for (let i = 0; i < arr.length - 1; i++) {

//         //  console.log(arr);
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 swap(arr, i, j)
//             }
//         }
//     }
//     console.log(arr);
// }
// console.log(selectionSort([8, 3, 4, 2, 10, 15]));

//---------------------------//
// Insertion Sort 
//---------------------------//


// function insertionSort(arr) {

//     const swap = (arr, idx1, idx2) => {
//         console.log('swap');
//         let temp = arr[idx1];
//         arr[idx1] = arr[idx2];
//         arr[idx2] = temp;
//     }

//     let i = 0;

//     while (i < arr.length - 1) {

//         for (let j = i; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j + 1, j);
//                 j + 1;
//             }
//         }
//         i++;
//     }
//     console.log(arr);
// }

// console.log(insertionSort([8, 3, 4, 123, 11, 25, 66, 25]));


// function insertionSort(arr) {
//     var currentVal;
//     for (var i = 1; i < arr.length; i++) {
//         currentVal = arr[i];
//         for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = currentVal;
//     }
//     return arr;
// }
// insertionSort([2, 1, 9, 76, 4])











/*=========================*/
//** bubble sorting **//
/*=========================*/


// function bubbleSort1(arr) {
//     let noSwap;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         noSwap = true;
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//                 noSwap = false;
//             }
//         }
//         if (noSwap) break;
//     }
//     return arr;
// }

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


//console.log(bubbleSort1([2, 1, 9, 76, 4, 85, 1000, 10, 2, 3]));


/*=========================*/
//** selection sorting **//
/*=========================*/
// function selectionSort1(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let smallest = i;
//         for (let j = i; j < arr.length; j++) {
//             if (arr[j] < arr[smallest]) smallest = j;
//         }
//         if (i !== smallest) swap(arr, i, smallest);
//     }
//     return arr;
// }
// console.log(selectionSort1([2, 9, 9, 76, 4, 1, 85]));

/*=========================*/
//** insertion sorting **//
/*=========================*/

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let target = arr[i];
//         for (let j = i - 1; j >= 0 && arr[j] > target; j--) {
//             swap(arr, j, j + 1)
//         }
//     }
//     return arr;
// }

// console.log(insertionSort([8, 3, 4, 2, 1, 0, 5, 55, 1.5]));