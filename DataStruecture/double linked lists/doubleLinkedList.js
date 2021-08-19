

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DoubleLinkedList {

//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val) {
//         let newNode = new Node(val);

//         if (this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;

//     }

//     pop() {
//         if (this.length === 0) return undefined;

//         let currentTail = this.tail;

//         if (this.length === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.tail = currentTail.prev;
//             this.tail.next = null;
//             currentTail.prev = null;
//         }
//         this.length--;
//         return currentTail;
//     }


//     shift() {
//         if (this.length === 0) return undefined;

//         let removedNode = this.head;

//         if (this.length === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.head = removedNode.next;
//             this.head.prev = null;
//             removedNode.next = null;
//         }
//         this.length--;
//         return removedNode;
//     }

//     unshift(val) {

//         let newNode = new Node(val);
//         let currentHead = this.head;

//         if (this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.head = newNode;
//             this.head.next = currentHead;
//             currentHead.prev = this.head;
//         }
//         this.length++;
//         return this;
//     }

//     // unshift(val) {
//     //     var newNode = new Node(val);
//     //     if (this.length === 0) {
//     //         this.head = newNode;
//     //         this.tail = newNode;
//     //     } else {
//     //         this.head.prev = newNode;
//     //         newNode.next = this.head;
//     //         this.head = newNode;
//     //     }
//     //     this.length++;
//     //     return this;
//     // }

//     // get(index) {
//     //     if (index < 0 || index > this.length - 1) return null;

//     //     let middle = this.length / 2;
//     //     let lastNode = this.tail;
//     //     let firstNode = this.head;
//     //     let i = 0;
//     //     let s = this.length - 1;

//     //     while (s > 0 && i < this.length - 1) {

//     //         if (index > middle) {
//     //             console.log(s);
//     //             if (s === index) return lastNode;
//     //             lastNode = lastNode.prev;
//     //             s--;
//     //         } else {
//     //             console.log(i);
//     //             if (i === index) return firstNode;
//     //             firstNode = firstNode.next;
//     //             i++;
//     //         }
//     //     }
//     // }

//     get(index) {
//         if (index < 0 || index >= this.length) return null;
//         var count, current;
//         if (index <= this.length / 2) {
//             count = 0;
//             current = this.head;
//             while (count !== index) {
//                 current = current.next;
//                 count++;
//             }
//         } else {
//             count = this.length - 1;
//             current = this.tail;
//             while (count !== index) {
//                 current = current.prev;
//                 count--;
//             }
//         }
//         return current;
//     }

//     set(index, val) {
//         let targetNode = this.get(index);
//         if (targetNode) {
//             targetNode.val = val;
//             return true;
//         }
//         return undefined;
//     }

//     insert(index, val) {
//         if (index < 0 || index > this.length) return false;

//         if (index === 0) return this.unshift(val);
//         if (index === this.length) return this.push(val);

//         let newNode = new Node(val);
//         let beforeNode = this.get(index - 1);
//         let afterNode = beforeNode.next;

//         beforeNode.next = newNode;
//         newNode.prev = beforeNode;
//         newNode.next = afterNode;
//         afterNode.prev = newNode;
//         this.length++;

//         return this;
//     }

//     remove(index) {
//         if (index < 0 || index >= this.length) return undefined;
//         if (index === 0) return this.shift();
//         if (index === this.length - 1) return this.pop();

//         let targetNode = this.get(index);
//         let beforeNode = targetNode.prev;
//         let afterNode = targetNode.next;

//         beforeNode.next = afterNode;
//         afterNode.prev = beforeNode;
//         targetNode.prev = null;
//         targetNode.next = null;

//         this.length--;

//         return targetNode;
//     }
// }


// let list = new DoubleLinkedList;

// list.push('aa');
// list.push('bb');
// list.push('cc');
// list.push('dd');
// list.push('ee');

// // list.unshift('00');
// // list.unshift('11');
// // list.unshift('22');

// console.log(list.remove(2));


// console.log(list);



// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//         this.prev = null;
//     }
// }


// class DoubleLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val) {
//         let newNode = new Node(val);
//         if (this.length === 0) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop() {
//         if (this.length === 0) return undefined;
//         let currentTail = this.tail;
//         if (this.length === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.tail = currentTail.prev;
//             this.tail.next = null;
//             currentTail.prev = null;
//         }
//         this.length--;
//         return currentTail;
//     }


//     shift() {
//         if (this.length === 0) return undefined;
//         let currentHead = this.head;
//         if (this.length === 1) {
//             this.pop();
//         } else {
//             this.head = currentHead.next;
//             this.head.prev = null;
//             currentHead.next = null;
//             this.length--;
//         }
//         return currentHead;
//     }

//     unshift(val) {
//         if (!this.length) return this.push(val);
//         let newNode = new Node(val);
//         let currentHead = this.head;
//         this.head = newNode;
//         newNode.next = currentHead;
//         currentHead.prev = this.head;
//         this.length++;
//         return this;
//     }

//     get(index) {
//         if (index < 0 || index > this.length - 1) return null;

//         let count, current;
//         let middle = (this.length - 1) / 2;

//         if (index < middle) {
//             current = this.head;
//             count = 0;
//             while (count !== index) {
//                 current = current.next;
//                 count++;
//             }
//         } else {
//             current = this.tail;
//             count = this.length - 1;
//             while (count !== index) {
//                 current = current.prev;
//                 count--;
//             }
//         }
//         return current;
//     }

//     set(index, val) {
//         let targetNode = this.get(index);
//         if (targetNode) {
//             targetNode.value = val;
//             return true;
//         }
//         return undefined;
//     }

//     insert(index, val) {
//         if (index < 0 || index > this.length - 1) return null;
//         if (index === 0) return this.shift(val);
//         if (index === this.length - 1) return this.push(val);
//         let targetNode = this.get(index - 1);
//         let nextNodes = targetNode.next;
//         targetNode.next = new Node(val);
//         targetNode.next.prev = targetNode;
//         targetNode.next.next = nextNodes;
//         targetNode.next.next.prev = targetNode.next;
//         this.length++;
//         return this;
//     }

//     remove(index) {
//         if (index < 0 || index >= this.length) return undefined;
//         if (index === 0) return this.shift();
//         if (index === this.length - 1) return this.pop();
//         let target = this.get(index);
//         let prevNodes = target.prev;
//         let nextNodes = target.next;
//         prevNodes.next = nextNodes;
//         nextNodes.prev = prevNodes;
//         target.prev = null;
//         target.next = null;
//         this.length--;
//         return target;
//     }
// }



// let list = new DoubleLinkedList();

// console.log(list.push("1"));
// console.log(list.push("2"));
// console.log(list.push("3"));
// console.log(list.push("4"));
// console.log(list.push("5"));

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());

// console.log(list.unshift(0));
// console.log(list.unshift(-1));
// console.log(list.unshift(-2));
//console.log(list.get(3));

//console.log(list.insert(2, "test"));
//console.log(list.set(2, "ttt"));

// console.log(list.remove(0));
// console.log(list.remove(1));
//console.log(list.remove(2));





//console.log(list);