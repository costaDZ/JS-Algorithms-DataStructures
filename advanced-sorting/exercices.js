/*=========================*/
//** merge sort **//
/*=========================*/

// function mergeSort(arr) {

//     if (arr.length <= 1) return arr;

//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// console.log(mergeSort([1, 4, 7, 2, 8, 5, 3]));



// function merge(arr1, arr2) {
//     let result = [];
//     let i = 0;
//     let j = 0;
//     while (arr1[i] || arr2[j]) {
//         if (arr1[i] <= arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         }
//         if (arr1[i] > arr2[j]) {
//             result.push(arr2[j]);
//             j++;
//         }
//         if (i > arr1.length - 1 && arr2[j]) {
//             result.push(arr2[j])
//             j++;
//         }
//         if (j > arr2.length - 1 && arr1[i]) {
//             result.push(arr1[i])
//             i++;
//         }
//     }
//     return result;
// }
// console.log(merge([1, 10, 11, 50, 55, 88], [1, 2, 3]));

/******************************/
// function merge(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] < arr2[j]) {
//                 arr2.splice(j, 0, arr1[i]);
//                 break;
//             }
//         }
//     }
// }
// console.log(merge([1, 9, 10, 50, 44, 55, 88], [2, 11, 15, 99, 100, 500, 1002, 4400]));
/******************************/



/*=========================*/
//** Quik sort **//
/*=========================*/

// function pivot(arr, strIdx = 0, endIdx = arr.length - 1) {

//     const swape = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     let pivot = arr[strIdx];
//     let pivotIdx = strIdx;;

//     for (let i = strIdx; i <= endIdx; i++) {
//         if (pivot > arr[i]) {
//             pivotIdx++;
//             swape(arr, pivotIdx, i)
//         }
//     }

//     swape(arr, strIdx, pivotIdx)

//     return pivotIdx;
// }


// function quikSort(arr, left = 0, right = arr.length - 1) {

//     if (left < right) {

//         let pivotIndex = pivot(arr, left, right);

//         quikSort(arr, left, pivotIndex - 1);

//         quikSort(arr, pivotIndex + 1, right);
//     }

//     return arr;
// }



// console.log(quikSort([55, 4, 3, 2, 1, 8, 5, 6]));

/*=========================*/
//** Radix sort (spacial algorithm and it is not comparison)**//
/*=========================*/

//========> /** get a digit by position (Helper Method)*/

// function getDigit(num, place) {
//     let result = num.toString();
//     return Number(result[result.length - (place + 1)]);
// }

//console.log(getDigit(1158732, 2));

// function getDigit(num, i) {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }
// //console.log(getDigit(1158732, 2));


// //========> /** get a digit by position (Helper Method)*/
// // function digitCount(num) {
// //     return num.toString().length;
// // }

// // console.log(digitCount(5));

// function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }
// //console.log(digitCount(541231));

// //========> /** get a digit by position (Helper Method)*/

// function mostDigits(arr) {
//     let length = 0;
//     arr.forEach(n => {
//         if (n.toString().length > length) {
//             length = n.toString().length;
//         }
//     })
//     return length;
// }
// //console.log(mostDigits([1234, 55555, 1212, 44, 5]));

// function radix(nums) {
//     let maxDigitCount = mostDigits(nums);
//     for (let k = 0; k < maxDigitCount; k++) {
//         let digitBuckets = Array.from({ length: 10 }, () => []);
//         for (let i = 0; i < nums.length; i++) {
//             let digit = getDigit(nums[i], k);
//             digitBuckets[digit].push(nums[i]);
//         }
//         nums = [].concat(...digitBuckets);
//     }
//     return nums;
// }

// console.log(radix([1234, 55555, 1212, 44, 5, 21, 100]));


/*---------------------------------------------------------------------------*/


/*=========================*/
//** merge sort **//
/*=========================*/

// function merge(arr1, arr2) {

//     let i = 0;
//     let j = 0;
//     let result = [];

//     while (arr1[i] || arr2[j]) {
//         console.log(result);

//         if (arr1[i] > arr2[j]) {
//             result.push(arr2[j]);
//             j++;
//         }
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         }

//         if (!arr1[i] && arr2[j]) {
//             result.push(arr2[j]);
//             j++;
//         }

//         if (!arr2[j] && arr1[i]) {
//             result.push(arr1[i]);
//             i++;
//         }
//     }
//     return result;
// }

// // console.log(mergeSort([55], [8]));



// function mergeSort(arr) {

//     if (arr.length <= 1) return arr;
//     let middle = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, middle));
//     let right = mergeSort(arr.slice(middle));

//     return merge(left, right);

// }
// console.log(mergeSort([4000, , 100, 55, 1, 10, 11, 88]));



/*=========================*/
//** Quik sort **//
/*=========================*/

// function pivot(arr, strIdx = 0, endIdx = arr.length - 1) {

//     const swape = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }

//     let pivot = arr[strIdx];
//     let swapIdx = strIdx;

//     for (let i = strIdx; i <= endIdx; i++) {

//         if (pivot > arr[i]) {
//             swapIdx++;
//             swape(arr, swapIdx, i)
//         }
//     }

//     swape(arr, strIdx, swapIdx);
//     return swapIdx;
// }


//console.log(pivot([5, 4, 3, 2, 1, 8, 2, 6]));


// function quikSort(arr, left = 0, right = arr.length - 1) {

//     if (left < right) {
//         let pivotIndex = pivot(arr, left, right);
//         quikSort(arr, left, pivotIndex - 1);
//         quikSort(arr, pivotIndex + 1, right);
//     }

//     return arr;
// }

// console.log(quikSort([55, 4, 3, 2, 1, 8, 5, 6]));


/*=========================*/
//** Radix sort (spacial algorithm and it is not comparison)**//
/*=========================*/

//******************************************************************//

/*=========================*/
//** merge sort **//
/*=========================*/

// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     let middle = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, middle));
//     let right = mergeSort(arr.slice(middle));
//     return merging(left, right);
// }

// console.log(mergeSort([55, 4, 3, 2, 1, 8, 5, 6]));

// function merging(arr1, arr2) {
//     let result = [];
//     let i = 0;
//     let j = 0;
//     while (arr1[i] || arr2[j]) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         }

//         if (arr1[i] > arr2[j]) {
//             result.push(arr2[j]);
//             j++;
//         }

//         if (!arr1[i] && arr2[j]) {
//             result.push(arr2[j]);
//             j++;
//         }

//         if (!arr2[j] && arr1[i]) {
//             result.push(arr1[i]);
//             i++;
//         }
//     }
//     return result;
// }

//console.log(merging([2, 3, 5, 9], [1, 4, 10, 11]));

/*=========================*/
//** Quik  sort **//
/*=========================*/


// function quikSort(arr, left = 0, right = arr.length - 1) {

//     if (left < right) {
//         let pivotItem = pivot(arr, left, right);
//         quikSort(arr, left, pivotItem - 1);
//         quikSort(arr, pivotItem + 1, right);

//     }
//     return arr;
// }


// console.log(quikSort([4, 2, 5, 3, 1, 6, 8, 7]));

// function pivot(arr, start = 0, end = arr.length - 1) {
//     let pivot = arr[start];
//     let currentPivotIdx = start;
//     for (let i = start + 1; i <= end; i++) {
//         if (pivot > arr[i]) {
//             currentPivotIdx++;
//             [arr[currentPivotIdx], arr[i]] = [arr[i], arr[currentPivotIdx]]
//         }
//     }
//     [arr[currentPivotIdx], arr[start]] = [arr[start], arr[currentPivotIdx]]
//     return currentPivotIdx;
// }

// console.log(pivot([4, 2, 5, 3, 1, 6, 8, 7], 0));



/*=========================*/
//** Radix  sort **//
/*=========================*/



// function getDigit(num, i) {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// function digitCount(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(nums) {
//     let maxDigits = 0;
//     for (let i = 0; i < nums.length; i++) {
//         maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//     }
//     return maxDigits;
// }

// function radixSort(nums) {
//     let maxDigitCount = mostDigits(nums);
//     for (let k = 0; k < maxDigitCount; k++) {
//         let digitBuckets = Array.from({ length: 10 }, () => []);
//         for (let i = 0; i < nums.length; i++) {
//             let digit = getDigit(nums[i], k);
//             digitBuckets[digit].push(nums[i]);
//         }
//         nums = [].concat(...digitBuckets);
//     }
//     return nums;
// }

// console.log(radixSort([445, 212, 55, 3, 14, 64522, 84, 7]));