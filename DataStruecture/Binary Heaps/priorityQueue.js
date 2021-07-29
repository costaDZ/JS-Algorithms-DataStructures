// class Node {
//     constructor(val, priority) {
//         this.value = val;
//         this.priority = priority;
//     }
// }

// class PriorityQueue {

//     constructor() {
//         this.values = [];
//     }

//     Enqueue(val, pri) {

//         let newNode = new Node(val, pri);

//         this.values.push(newNode);
//         this.bubleUp()
//         // let elementIdx = this.values.length - 1;
//         // while (elementIdx >= 0) {
//         //     let parentIdx = Math.floor((elementIdx - 1) / 2);
//         //     if (parentIdx >= 0) {
//         //         if (this.values[elementIdx].priority < this.values[parentIdx].priority) {
//         //             let temp = this.values[elementIdx];
//         //             this.values[elementIdx] = this.values[parentIdx];
//         //             this.values[parentIdx] = temp;
//         //             elementIdx = parentIdx;
//         //         } else {
//         //             break;
//         //         }
//         //     } else {
//         //         break;
//         //     }
//         // }
//     }

//     bubleUp() {
//         let index = this.values.length - 1;
//         let element = this.values[index];

//         while (index > 0) {
//             let parentIndex = Math.floor((index - 1) / 2);
//             let parent = this.values[parentIndex];
//             if (parent.priority <= element.priority) break;
//             this.values[index] = parent;
//             this.values[parentIndex] = element;
//             index = parentIndex;
//         }
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
//                 if (leftChild.priority < element.priority) {
//                     swap = leftChildIdx;
//                 }
//             }
//             if (rightChildIdx < length) {
//                 rightChild = this.values[rightChildIdx];
//                 if (
//                     (swap === null && rightChild.priority < element.priority) ||
//                     (swap !== null && rightChild.priority < leftChild.priority)
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


// let list = new PriorityQueue;
// list.Enqueue('six', 4);
// list.Enqueue('111', 1);


// list.Enqueue('third', 3);
// list.Enqueue('first', 0);
// list.Enqueue('second', 2);
// list.Enqueue('four', 15);
// list.Enqueue('five', 23);

// list.dequeue();
// list.dequeue();

// list.dequeue();



// console.log(list);