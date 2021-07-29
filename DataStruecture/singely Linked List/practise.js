// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class SingelyLinkedList {

//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     // set to the end
//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     //remove from the end
//     pop() {
//         if (!this.head) return undefined;
//         if (this.length === 1) {
//             this.head = null;
//             this.tail = null;
//             this.length = 0;
//             return this;
//         }
//         let targetNode = this.head;
//         let newTail = targetNode;

//         while (targetNode.next) {
//             newTail = targetNode;
//             targetNode = targetNode.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         return this;
//     }

//     //remove from the start
//     shift() {
//         if (!this.head) return undefined;
//         let removedNode = this.head;
//         this.head = this.head.next;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return removedNode;
//     }

//     //add from the start
//     unshift(val) {
//         if (!this.head) {
//             this.head = new Node(val);
//             this.tail = this.head;
//         } else {
//             let nextNodes = this.head;
//             this.head = new Node(val)
//             this.head.next = nextNodes;
//         }
//         this.length++;
//         return this;
//     }

//     // get from specific index
//     get(index) {
//         if (index < 0 || index > this.length - 1) return null;
//         let currentNode = this.head;
//         let counter = 0;
//         while (counter !== index) {
//             currentNode = currentNode.next;
//             counter++;
//         }
//         return currentNode;
//     }

//     // set to a specific index
//     set(index, val) {
//         if (index < 0 || index > this.length - 1) return false;

//         let targetNode = this.get(index);
//         targetNode.val = val;
//         return this;
//     }

//     // insert in a specific index 
//     insert(index, val) {
//         if (index < 0 || index > this.length) return false;

//         if (index === 0) return !!this.unshift(val);
//         if (index === this.length) return !!this.push(val);

//         let targetNode = this.get(index - 1);
//         let restNodes = targetNode.next;
//         targetNode.next = new Node(val);
//         target.next.next = restNodes;
//         this.length++;
//         return true;
//     }

//     // remove at a specific index
//     remove(index) {
//         if (index < 0 || index > this.length - 1) return undefined;
//         if (index === 0) return this.shift(index).val;
//         let prevNodes = this.get(index - 1);
//         let afterNodes = this.get(index + 1);
//         let removedNode = this.get(index).val;

//         prevNodes.next = afterNodes;
//         this.length--;
//         return removedNode;
//     }

//     swap(idx1, idx2) {
//         if (((idx1 || idx2) < 0) || ((idx1 || idx2) > this.length - 1)) return false;
//         let firstTar = this.get(idx1);
//         let secondTar = this.get(idx2);
//         let temp = secondTar.val;
//         secondTar.val = firstTar.val;
//         firstTar.val = temp;
//         return this;
//     }

//     reverseMine() {
//         let p1 = this.length - 1;
//         let p2 = 0;
//         while (p1 - p2 > 1) {
//             this.swap(p1, p2);
//             p1--;
//             p2++;
//         }
//         return this
//     }

//     // reverse() {
//     //     let node = this.head;
//     //     this.head = this.tail;
//     //     this.tail = node;

//     //     let next = null;
//     //     let prev = null;
//     //     let i = 0;
//     //     while (i < this.length) {

//     //         next = node.next;
//     //         node.next = prev;
//     //         prev = node;

//     //         node = next;
//     //         i++;

//     //     }
//     //     return prev;
//     // }

//     reverse() {


//         let prev = null;
//         let next = null;
//         let node = this.head;

//         let i = 0;
//         while (i < this.length - 1) {

//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//             i++;

//         }
//         return prev;
//     }

// }


// let list = new SingelyLinkedList();

// list.push('1111');
// list.push('2222');
// list.push('3333');
// list.push('4444');
// list.push('5555');
// list.push('6666');
// list.push('7777');
// list.push('8888');
// list.push('9999');


// //list.pop();

// //list.shift();
// // list.shift();

// // list.unshift('aaa');
// // list.unshift('bbb');
// // list.unshift('ccc');

// //console.log(list.insert(0, 'test'));


// // console.log(list.remove(4));
// console.log(list.reverse());

// //console.log(list.swap(1, 3));

// console.log(list);