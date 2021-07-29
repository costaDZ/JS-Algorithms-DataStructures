

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
//         this.length = 0;
//     }

//     push(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop() {
//         if (!this.head) return undefined;
//         let current = this.head;
//         let newTail = current;

//         while (current.next) {
//             newTail = current
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }

//     shift() {
//         if (!this.head) return undefined;
//         let currHead = this.head;
//         this.head = this.head.next;
//         this.length--;
//         if (this.length === 0) {
//             this.head = null;
//             this.tail = null;
//         }
//         return currHead;
//     }

//     unshift(val) {
//         let newNode = new Node(val);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     get(index) {
//         if (index >= this.length || index < 0) return null;
//         let counter = 0;
//         let currentVal = this.head;
//         while (counter !== index) {
//             currentVal = currentVal.next;
//             counter++;
//         }
//         return currentVal;
//     }

//     set(index, val) {
//         if (index >= this.length || index < 0) return false;
//         let targetVal = this.get(index);
//         targetVal.val = val;
//         return targetVal;
//     }

//     insert(index, val) {
//         if (index > this.length || index < 0) return false;
//         if (index === 0) { return !!this.unshift(val) }
//         if (index === this.length) { return !!this.push(val) }

//         let targetNode = this.get(index - 1);
//         let restNodes = targetNode.next;
//         targetNode.next = new Node(val);
//         targetNode.next.next = restNodes;
//         this.length++;
//         return true;
//     }

//     remove(index) {
//         if (index >= this.length || index < 0) return undefined;
//         if (index === this.length - 1) this.pop();
//         if (index === 0) this.shift();

//         let removerdNode = this.get(index);
//         let prevNode = this.get(index - 1);
//         let nextNode = this.get(index + 1);
//         prevNode.next = nextNode;
//         this.length--;
//         return removerdNode.val;
//     }

//     swap(targ1Idx, targ2Idx) {
//         if (((targ1Idx || targ2Idx) < 0) || (targ1Idx || targ2Idx) >= this.length) return false;
//         let firstTar = this.get(targ1Idx);
//         let secondTar = this.get(targ2Idx);
//         let temp = secondTar.val;
//         secondTar.val = firstTar.val;
//         firstTar.val = temp;
//         return this;
//     }

//     reverseMine() {
//         let p1 = 0;
//         let p2 = this.length - 1;

//         while ((p2 - p1 > 0)) {
//             console.log(p1, p2);
//             this.swap(p1, p2);
//             p1++;
//             p2--;
//         }
//         return this;
//     }

//     reverse() {
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;


//         debugger
//         let next;
//         let prev = null;

//         let i = 0;
//         while (i < this.length) {

//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//             i++;

//         }

//         return this;
//     }

// }




// let list = new SinglyLinkdeList();

// list.push("1");
// list.push("2");
// list.push("3");
// list.push("4");
// // list.push("5");
// // list.push("6");
// // list.push("7");
// // list.push("8");
// // list.push("9");
// // list.push("10");
// // list.push("11");





// // list.pop();
// // list.pop();
// // list.pop();

// // list.unshift("111111");

// // console.log(list.get(0));
// //list.unshift("000000");

// //console.log(list.set(1, '22222'));

// //console.log(list.insert(0, 'test'));

// //console.log(list.remove(3));

// console.log(list.reverse());

// console.log(list);
