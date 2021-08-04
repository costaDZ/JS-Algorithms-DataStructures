// class Node {
//     constructor(val, priority) {
//         this.value = val;
//         this.priority = priority;
//     }
// }

// class PriorityQueue {

//     constructor() {
//         this.values = [];
//     }

//     enqueue(val, pri) {
//         let newNode = new Node(val, pri);
//         this.values.push(newNode);
//         this.bubleUp()
//         // let elementIdx = this.values.length - 1;
//         // while (elementIdx >= 0) {
//         //     let parentIdx = Math.floor((elementIdx - 1) / 2);
//         //     if (parentIdx >= 0) {
//         //         if (this.values[elementIdx].priority < this.values[parentIdx].priority) {
//         //             let temp = this.values[elementIdx];
//         //             this.values[elementIdx] = this.values[parentIdx];
//         //             this.values[parentIdx] = temp;
//         //             elementIdx = parentIdx;
//         //         } else {
//         //             break;
//         //         }
//         //     } else {
//         //         break;
//         //     }
//         // }
//     }

//     bubleUp() {
//         let index = this.values.length - 1;
//         let element = this.values[index];

//         while (index > 0) {
//             let parentIndex = Math.floor((index - 1) / 2);
//             let parent = this.values[parentIndex];
//             if (parent.priority <= element.priority) break;
//             this.values[index] = parent;
//             this.values[parentIndex] = element;
//             index = parentIndex;
//         }
//     }

//     dequeue() {
//         const min = this.values[0];
//         const end = this.values.pop();
//         if (this.values.length > 0) {
//             this.values[0] = end;
//             this.sinkDown();
//         }
//         return min;
//     }


//     sinkDown() {
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while (true) {
//             let leftChildIdx = 2 * idx + 1;
//             let rightChildIdx = 2 * idx + 2;
//             let leftChild, rightChild;
//             let swap = null;

//             if (leftChildIdx < length) {
//                 leftChild = this.values[leftChildIdx];
//                 if (leftChild.priority < element.priority) {
//                     swap = leftChildIdx;
//                 }
//             }
//             if (rightChildIdx < length) {
//                 rightChild = this.values[rightChildIdx];
//                 if (
//                     (swap === null && rightChild.priority < element.priority) ||
//                     (swap !== null && rightChild.priority < leftChild.priority)
//                 ) {
//                     swap = rightChildIdx;
//                 }
//             }
//             if (swap === null) break;
//             this.values[idx] = this.values[swap];
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }
// }


// class weightedGraph {
//     constructor() {
//         this.adjecencyList = {};
//     }

//     addVertex(vertex) {
//         if (!this.adjecencyList[vertex]) this.adjecencyList[vertex] = [];
//     }

//     addEdge(vertex1, vertex2, weight) {
//         this.adjecencyList[vertex1].push({ node: vertex2, weight });
//         this.adjecencyList[vertex2].push({ node: vertex1, weight });
//     }

//     dijktrasAlgorithm(start, finish) {
//         let previous = {};
//         let distances = {};
//         let priorities = new PriorityQueue();


//         for (let prop in this.adjecencyList) {
//             if (prop !== start) {
//                 distances[prop] = Infinity;
//                 priorities.enqueue(prop, Infinity);
//             } else {
//                 distances[prop] = 0;
//                 priorities.enqueue(prop, 0);
//             }
//             previous[prop] = null;
//         }


//         while (priorities.values.length) {

//             let targetVtx = priorities.dequeue().value;
//             console.log(distances);

//             if (targetVtx === finish) {
//                 let result = [];
//                 result.push(finish)
//                 while (result[0] !== start) {
//                     let current = previous[result[0]];
//                     result.unshift(current);
//                 }
//                 return { result, distance: distances[finish] };
//             }

//             for (let neighbor of this.adjecencyList[targetVtx]) {
//                 let distence = neighbor.weight + distances[targetVtx];
//                 if (distence < distances[neighbor.node]) {
//                     distances[neighbor.node] = distence;
//                     previous[neighbor.node] = targetVtx;
//                     priorities.enqueue(neighbor.node, distence);
//                 }
//             }
//             // console.log(distances);

//         }
//     }


// }

// let graph = new weightedGraph();

// graph.addVertex("a");
// graph.addVertex("b");
// graph.addVertex("c");
// graph.addVertex("d");
// graph.addVertex("e");
// graph.addVertex("f");


// graph.addEdge("a", "b", 4);
// graph.addEdge("a", "c", 2);
// graph.addEdge("b", "e", 8);
// graph.addEdge("c", "d", 2);
// graph.addEdge("c", "f", 4);
// graph.addEdge("d", "f", 1);
// graph.addEdge("d", "e", 3);
// graph.addEdge("f", "e", 1);




// console.log(graph.dijktrasAlgorithm("a", "e"));


// console.log(graph);