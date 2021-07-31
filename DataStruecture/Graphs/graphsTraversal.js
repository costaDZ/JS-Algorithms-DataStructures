
// class Graph {
//     constructor() {
//         this.adjecencyList = {};
//     }
//     // test 

//     addVertex(vertex) {
//         if (!this.adjecencyList[vertex]) {
//             this.adjecencyList[vertex] = [];
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         this.adjecencyList[vertex1].push(vertex2);
//         this.adjecencyList[vertex2].push(vertex1);
//     }

//     removeEdge(vertex1, vertex2) {
//         this.adjecencyList[vertex1] =
//             this.adjecencyList[vertex1].filter(v => v !== vertex2);
//         this.adjecencyList[vertex2] =
//             this.adjecencyList[vertex2].filter(v => v !== vertex1);
//     }

//     removerVertex(vertex) {
//         for (let prop in this.adjecencyList) {
//             this.removeEdge(prop, vertex);
//         }
//         delete this.adjecencyList[vertex];
//     }

//     depthFirstRecursive1(strVtx) {
//         let list = [];
//         let visited = {};
//         let adjecencyList = this.adjecencyList;
//         (function DFS(Vtx) {
//             if (!Vtx) return null;
//             visited[Vtx] = true;
//             list.push(Vtx);
//             for (let val of adjecencyList[Vtx]) {
//                 if (!visited[val]) {
//                     DFS(val);
//                 }
//             }
//         })(strVtx);
//         return list;
//     }

//     depthFirstRecursive(start) {
//         const result = [];
//         const visited = {};
//         const adjacencyList = this.adjecencyList;

//         (function dfs(vertex) {
//             if (!vertex) return null;
//             visited[vertex] = true;
//             result.push(vertex);
//             adjacencyList[vertex].forEach(neighbor => {
//                 if (!visited[neighbor]) {
//                     return dfs(neighbor)
//                 }
//             });
//         })(start);

//         return result;
//     }



//     depthFirstIterative(start) {
//         const stack = [start]; // ===> we use Stack [LIFO]
//         const result = [];
//         const visited = {};
//         let currentVertex;

//         visited[start] = true;
//         while (stack.length) {
//             currentVertex = stack.pop();
//             result.push(currentVertex);

//             this.adjecencyList[currentVertex].forEach(neighbor => {
//                 // console.log(currentVertex, "////", neighbor, visited, stack);
//                 if (!visited[neighbor]) {
//                     visited[neighbor] = true;
//                     stack.push(neighbor)
//                 }
//             });
//         }
//         return result;
//     }


//     breadthFirst(start) {
//         const queue = [start];  // ===> we use QUEUES [FIFO]

//         const result = [];
//         const visited = {};
//         let currentVertex;

//         visited[start] = true;

//         while (queue.length) {
//             currentVertex = queue.shift();
//             result.push(currentVertex);

//             this.adjecencyList[currentVertex].forEach(neighbor => {

//                 if (!visited[neighbor]) {
//                     visited[neighbor] = true;
//                     queue.push(neighbor);
//                 }

//             })
//         }

//         return result;

//     }
// }


// let list = new Graph();






// list.addVertex("A")
// list.addVertex("B")
// list.addVertex("C")
// list.addVertex("D")
// list.addVertex("E")
// list.addVertex("F")
// list.addVertex("k")
// list.addVertex("l")


// list.addEdge("A", "B")
// list.addEdge("A", "C")
// list.addEdge("B", "D")
// list.addEdge("C", "E")
// list.addEdge("D", "E")
// list.addEdge("D", "F")
// list.addEdge("E", "F")
// // list.addEdge("E", "k")
// // list.addEdge("E", "l")

// console.log(list);

// // console.log(list.depthFirstRecursive1("A"));
// // console.log(list.depthFirstRecursive("A"));

// // console.log(list.depthFirstIterative("A"));

// console.log(list.breadthFirst("A"));


// // console.log(list);

// //          A
// //        /   \
// //       B     C
// //       |     |
// //       D --- E
// //        \   /
// //          F
