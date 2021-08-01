
class WeightedGraph {
    constructor() {
        this.adjencencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjencencyList[vertex]) this.adjencencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjencencyList[vertex1].push({ node: vertex2, weight });
        this.adjencencyList[vertex2].push({ node: vertex1, weight });
    }
}


let list = new WeightedGraph();

list.addVertex("A");
list.addVertex("B");
list.addVertex("C");

list.addEdge("A", "B", 15)
list.addEdge("C", "B", 8)
list.addEdge("A", "C", 20)

console.log(list);
//t