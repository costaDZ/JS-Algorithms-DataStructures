// class Node {
//     constructor(val) {
//         this.value = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// class Tree {
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
//                     if (!currentNode.left) {
//                         currentNode.left = newNode;
//                         return this;
//                     }
//                     currentNode = currentNode.left;
//                 } else {
//                     if (!currentNode.right) {
//                         currentNode.right = newNode;
//                         return this;
//                     }
//                     currentNode = currentNode.right;
//                 }
//             }
//         }
//     }

//     BFS() {
//         let visited = [];
//         let result = [];

//         visited.unshift(this.root);

//         while (visited.length) {
//             let targetNode = visited.shift();
//             result.push(targetNode.value);

//             if (targetNode.left) visited.unshift(targetNode.left);
//             if (targetNode.right) visited.unshift(targetNode.right);
//         }
//         return result;
//     }

//     DFSPreOrder() {

//         let result = [];
//         let current = this.root;

//         function traverse(node) {
//             result.push(node.value);
//             if (node.left) traverse(node.left);
//             if (node.right) traverse(node.right);

//         }
//         traverse(current)
//         return result;
//     }


//     DFSPostOrder() {
//         let result = [];
//         function traverse(node) {
//             if (node.left) traverse(node.left);
//             if (node.right) traverse(node.right);
//             result.push(node.value);
//         }
//         traverse(this.root);
//         return result;
//     }

//     DFSInOrder() {
//         let result = [];

//         function traverse(node) {
//             if (node.left) traverse(node.left);
//             result.push(node.value);
//             if (node.right) traverse(node.right);
//         }

//         traverse(this.root);
//         return result;
//     }
// }


// let tree = new Tree();

// tree.insert(25);
// tree.insert(50);
// tree.insert(66);
// tree.insert(33);
// tree.insert(20);
// tree.insert(10);
// tree.insert(8);
// tree.insert(32);
// tree.insert(0);
// tree.insert(81);
// tree.insert(4);

// console.log(tree.BFS());
// console.log(tree.DFSPostOrder());
// console.log(tree.DFSInOrder());


// console.log(tree);