// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
// class SinglyLinkdeList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = null;
//     }

//     push(val) {
//         let newNode = new Node(val);
//         if (!this.length) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//     }

//     unshift(val) {
//         let newNode = new Node(val);
//         let temp = this.head;
//         this.head = newNode;
//         this.head.next = temp;
//         this.length++;
//     }

//     pop() {
//         if (!this.length) return undefined;
//         let currentNode = this.head;
//         let newTail = currentNode;

//         while (currentNode.next) {
//             newTail = currentNode;
//             currentNode = currentNode.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return currentNode;
//     }

//     shift() {
//         if (!this.length) return undefined;
//         let target = this.head;
//         let rest = this.head.next;
//         this.head = rest;
//         this.length--;
//         if (this.length === 0) this.tail = null;
//         target.next = null;
//         return target;
//     }

//     get(index) {
//         if (index > this.length || !this.length || index < 0) return null;
//         let currentNode = this.head;
//         let i = 0;
//         while (i !== index) {
//             currentNode = currentNode.next;
//             i++;
//         }
//         return currentNode;
//     }


//     set(index, val) {
//         if (index >= this.length || index < 0) return false;
//         let targetVal = this.get(index);
//         targetVal.val = val;
//         return targetVal;
//     }

//     insert(index, val) {
//         if (index > this.length + 1 || !this.length || index < 0) return null;
//         if (index === this.length) return this.push(val);
//         if (index === 0) return this.unshift(val);
//         let newNode = new Node(val);
//         let currentNode = this.get(index - 1);
//         let nextNodes = currentNode.next;
//         currentNode.next = newNode;
//         newNode.next = nextNodes;
//         this.length++;
//         return this;
//     }


//     remove(index) {
//         if (index > this.length + 1 || !this.length || index < 0) return null;
//         if (index === this.length) return this.pop();
//         if (index === 0) return this.shift();
//         let currentNode = this.get(index);
//         let prev = this.get(index - 1);
//         let next = currentNode.next;
//         prev.next = next;
//         this.length--;
//         return currentNode;
//     }

//     reverse() {
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;
//         let i = 0;
//         let next;
//         let prev = null;

//         while (i < this.length) {
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//             i++;
//         }
//     }
// }
// let list = new SinglyLinkdeList();
// list.push("1");
// list.push("2");
// list.push("3");
// list.push("4");
// // list.push("5");
// // list.push("6");
// // console.log(list.remove(2));
// // console.log(list.remove(0));
// // console.log(list.remove(0));
// // console.log(list.remove(0));

// console.log(list.reverse());

// // list.unshift("0");
// // list.unshift("-1");
// // list.unshift("-2");

// // console.log(list.pop());
// // console.log(list.pop());
// // console.log(list.pop());

// // console.log(list.shift());
// // console.log(list.shift());
// // console.log(list.shift());


// // console.log(list);



// //console.log(list.get(0));
// //console.log(list.insert(2, "//"));








// console.log(list);