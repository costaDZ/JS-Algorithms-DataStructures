// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//     }
// }
// class Stack {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }

//     push(val) {
//         let newNode = new Node(val);
//         if (this.size === 0) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             let currentFist = this.first;
//             this.first = newNode;
//             this.first.next = currentFist;
//         }
//         return this.size++;
//     }

//     pop() {
//         if (this.size === 0) return null;
//         let targetVal = this.first.value;
//         if (this.size === 1) {
//             this.first = null;
//             this.last = null;
//         } else {
//             this.first = this.first.next;
//         }
//         this.size--;
//         return targetVal;
//     }
// }

// let list = new Stack();
// list.push('000');
// list.push('111');
// list.push('222');

// // console.log(list.pop());
// // console.log(list.pop());

// console.log(list);