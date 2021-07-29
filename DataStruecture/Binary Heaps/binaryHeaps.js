// class MaxBinaryHeaps {

//     constructor() {
//         this.values = [55, 39, 41, 18, 27, 12, 33];
//     }

//     insert(val) {
//         this.values.push(val);
//         this.bubleUp();
//     }

//     swap(idx1, idx2, arr) {
//         let temp = arr[idx1];
//         arr[idx1] = arr[idx2];
//         arr[idx2] = temp;
//     }

//     bubleUp() {
//         let index = this.values.length - 1;
//         let element = this.values[index];

//         while (index > 0) {
//             let parentIndex = Math.floor((index - 1) / 2);
//             let parent = this.values[parentIndex];
//             if (parent >= element) break;
//             this.values[index] = parent;
//             this.values[parentIndex] = element;
//             index = parentIndex;
//         }
//     }


//     extractMax() {
//         if (!this.values.length) return undefined;
//         let lastIdx = this.values.length - 1;
//         this.swap(0, lastIdx, this.values);
//         let targetItem = this.values.pop();

//         let parentIdx = 0;
//         let element = this.values[0];


//         while (true) {
//             let rightChildIdx = 2 * parentIdx + 1;
//             let leftChildIdx = 2 * parentIdx + 2;
//             let rightChild = this.values[rightChildIdx];
//             let leftChild = this.values[leftChildIdx];



//             if ((rightChild > element || leftChild > element)
//                 && (leftChild && rightChild)) {
//                 let targetIdx = this.values.indexOf(Math.max(rightChild, leftChild));
//                 this.swap(parentIdx, targetIdx, this.values);
//                 parentIdx = targetIdx;
//             } else {
//                 let child = leftChild || rightChild;
//                 if (child > element) {
//                     this.swap(this.values.indexOf(child), parentIdx, this.values);
//                 }
//             }
//             if (!rightChild || !leftChild) break;

//         }
//         return targetItem;
//     }


//     dequeue() {
//         const min = this.values[0];
//         const end = this.values.pop();
//         if (this.values.length > 0) {
//             this.values[0] = end;
//             this.sinkDown();
//         }
//         console.log(min);
//         return min;
//     }


//     sinkDown() {
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while (true) {
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild, rightChild;
//             let swap = null;

//             if (leftChildIdx < length) {
//                 leftChild = this.values[leftChildIdx];
//                 if (leftChild < element) {
//                     swap = leftChildIdx;
//                 }
//             }
//             if (rightChildIdx < length) {
//                 rightChild = this.values[rightChildIdx];
//                 if (
//                     (swap === null && rightChild < element) ||
//                     (swap !== null && rightChild < leftChild)
//                 ) {
//                     swap = rightChildIdx;
//                 }
//             }
//             if (swap === null) break;
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }


// }

// let list = new MaxBinaryHeaps();

// console.log(list);

// // list.insert(40);
// // list.insert(55);
// //list.insert(180);
// //list.insert(20);

// // list.dequeue();
// // list.dequeue();
// // list.dequeue();
// // list.dequeue();

// console.log(list.extractMax());
// console.log(list.extractMax());
// console.log(list.extractMax());
// console.log(list.extractMax());
// console.log(list.extractMax());
// console.log(list.extractMax());
// console.log(list.extractMax());
// console.log(list.extractMax());


// // console.log(list.extractMax()); 





// //console.log(list.extractMax()); 

// console.log(list);