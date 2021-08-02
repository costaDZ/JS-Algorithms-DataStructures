class WeightedGraph {
    constructor() {
        this.adjencencyList = {};
        this.values = [];
    }

    addVertex(vertex) {
        if (!this.adjencencyList[vertex]) this.adjencencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjencencyList[vertex1].push({ node: vertex2, weight });
        this.adjencencyList[vertex2].push({ node: vertex1, weight });
    }

    shortestPath(start, finish) {
        let nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let smallest;
        for (let props in this.adjencencyList) {
            if (props !== start) {
                distances[props] = Infinity;
                nodes.enqueue(props, Infinity);
            } else {
                distances[props] = 0;
                nodes.enqueue(props, 0);
            }
            previous[props] = null;
        }


        while (nodes.values.length) {
            //debugger;
            smallest = nodes.dequeue().value;
            if (smallest === finish) {
                console.log(distances);
                console.log(previous);

                let result = [];
                result.push(finish)
                while (result[0] !== start) {
                    let current = previous[result[0]];
                    result.unshift(current);
                }
                return result;
            };

            console.log(smallest);
            for (let neighbor of this.adjencencyList[smallest]) {
                let distence = neighbor.weight + distances[smallest];
                if (distence < distances[neighbor.node]) {
                    distances[neighbor.node] = distence;
                    previous[neighbor.node] = smallest;
                    nodes.enqueue(neighbor.node, distence);
                }
            }
        }

    }

}

class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {

    constructor() {
        this.values = [];
    }

    enqueue(val, pri) {
        let newNode = new Node(val, pri);
        this.values.push(newNode);
        this.bubleUp()
        // let elementIdx = this.values.length - 1;
        // while (elementIdx >= 0) {
        //     let parentIdx = Math.floor((elementIdx - 1) / 2);
        //     if (parentIdx >= 0) {
        //         if (this.values[elementIdx].priority < this.values[parentIdx].priority) {
        //             let temp = this.values[elementIdx];
        //             this.values[elementIdx] = this.values[parentIdx];
        //             this.values[parentIdx] = temp;
        //             elementIdx = parentIdx;
        //         } else {
        //             break;
        //         }
        //     } else {
        //         break;
        //     }
        // }
    }

    bubleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (parent.priority <= element.priority) break;
            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }


    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}






let list = new WeightedGraph();

list.addVertex("A");
list.addVertex("B");
list.addVertex("C");
list.addVertex("D");
list.addVertex("E");
list.addVertex("F");


list.addEdge("A", "B", 4);
list.addEdge("A", "C", 2);
list.addEdge("B", "E", 3);
list.addEdge("C", "D", 2);
list.addEdge("C", "F", 4);
list.addEdge("D", "E", 3);
list.addEdge("D", "F", 1);
list.addEdge("E", "F", 1);


console.log(list.shortestPath("A", "E"));
//





