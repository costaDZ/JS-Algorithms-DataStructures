// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

// insert(val) {
//     let newNode = new Node(val);
//     let currentNode = this.root;

//     if (!currentNode) {
//         this.root = newNode;
//         return this;
//     } else {
//         while (true) {
//             if (val === currentNode.value) return undefined;
//             if (val < currentNode.value) {
//                 if (currentNode.left) {
//                     currentNode = currentNode.left;
//                 } else {
//                     currentNode.left = newNode;
//                     return this;
//                 }
//             } else {
//                 if (currentNode.right) {
//                     currentNode = currentNode.right;
//                 } else {
//                     currentNode.right = newNode;
//                     return this;
//                 }
//             }
//         }
//     }
// }

//     search(val) {
//         if (!this.root) return undefined;

//         let currentNode = this.root;
//         while (true) {
//             if (currentNode.value === val) {
//                 return currentNode;
//             } else if (val < currentNode.value) {
//                 if (!currentNode.left) {
//                     return undefined;
//                 }
//                 currentNode = currentNode.left;
//             } else if (val > currentNode.value) {
//                 if (!currentNode.right) {
//                     return undefined;
//                 }
//                 currentNode = currentNode.right;
//             }
//         }
//     }

//     find(val) {
//         if (!this.root) return false;

//         let currentNode = this.root;
//         while (currentNode) {
//             if (currentNode.value === val) {
//                 return true;
//             } else if (val < currentNode.value) {
//                 currentNode = currentNode.left;
//             } else if (val > currentNode.value) {
//                 currentNode = currentNode.right;
//             }
//         }
//         return false;
//     }
// }

// let tree = new BinarySearchTree();

// //tree.root = new Node(10);

// tree.insert(11);
// tree.insert(41);
// tree.insert(8);

// tree.insert(55);
// tree.insert(15);
// tree.insert(4);

// tree.insert(11);



// console.log(tree.find(151));



// console.log(tree);


//========================================//

// class Node {
//     constructor(val) {
//         this.value = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(val) {
//         let newNode = new Node(val);
//         let current = this.root;

//         if (!this.root) return this.root = newNode;
//         while (true) {
//             if (current.value === val) return undefined;
//             if (val > current.value) {
//                 if (current.right) {
//                     current = current.right;
//                 } else {
//                     current.right = newNode;
//                     break;
//                 }
//             } else {
//                 if (current.left) {
//                     current = current.left;
//                 } else {
//                     current.left = newNode;
//                     break;
//                 }
//             }
//         }
//         return this;
//     }

//     search(val) {
//         if (this.root.value === val) return this.root;

//         let current = this.root;

//         while (true) {
//             if (current.value === val) {
//                 return current;
//             } else if (current.value < val) {
//                 if (!current.right) return undefined;
//                 current = current.right;
//             } else {
//                 if (!current.left) return undefined;
//                 current = current.left;
//             }
//         }
//     }



//     find(val) {
//         if (this.root.value === val) return true;

//         let current = this.root;

//         while (true) {
//             if (current.value === val) return true;

//             if (current.value > val) {
//                 if (!current.left) return false;
//                 current = current.left;
//             } else {
//                 if (!current.right) return false;
//                 current = current.right;
//             }
//         }
//     }
// }

// let tree = new BinarySearchTree();

// tree.insert(10);
// tree.insert(8);
// tree.insert(6);
// tree.insert(7);
// // tree.insert(15);
// // tree.insert(12);
// // tree.insert(11);
// // tree.insert(13);
// // tree.insert(18);
// // tree.insert(18);

// // console.log(tree.search(10));
// // console.log(tree.search(15));

// console.log(tree.find(0));



// console.log(tree);