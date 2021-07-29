// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//     }
// }

// class Queues {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }

//     enqueue(val) {
//         let newNode = new Node(val);

//         if (this.size === 0) {
//             this.first = newNode;
//             this.last = newNode;
//         } else {
//             this.last.next = newNode;
//             this.last = newNode;
//         }
//         return this.size++;
//     }

//     dequeue() {
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


// let list = new Queues();

// console.log(list.enqueue("0000"));
// console.log(list.enqueue("1111"));
// console.log(list.enqueue("2222"));

// console.log(list.dequeue());
// console.log(list.dequeue());
// console.log(list.dequeue());
// console.log(list.dequeue());




// console.log(list);