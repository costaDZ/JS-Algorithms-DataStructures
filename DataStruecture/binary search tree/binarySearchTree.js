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

//     insert(val) {
//         let newNode = new Node(val);
//         let currentNode = this.root;

//         if (!currentNode) {
//             this.root = newNode;
//             return this;
//         } else {

//             while (true) {
//                 if (val === currentNode.value) return undefined;

//                 if (val < currentNode.value) {

//                     if (currentNode.left) {
//                         currentNode = currentNode.left;
//                     } else {
//                         currentNode.left = newNode;
//                         return this;
//                     }

//                 } else {

//                     if (currentNode.right) {
//                         currentNode = currentNode.right;
//                     } else {
//                         currentNode.right = newNode;
//                         return this;
//                     }

//                 }

//             }
//         }
//     }

//     // search(val) {

//     //     if (!this.root) return undefined;

//     //     let currentNode = this.root;

//     //     while (true) {
//     //         if (currentNode.value === val) {
//     //             return currentNode;

//     //         } else if (val < currentNode.value) {
//     //             if (!currentNode.left) {
//     //                 return undefined;
//     //             }
//     //             currentNode = currentNode.left;

//     //         } else if (val > currentNode.value) {

//     //             if (!currentNode.right) {
//     //                 return undefined;
//     //             }
//     //             currentNode = currentNode.right;
//     //         }
//     //     }

//     // }

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