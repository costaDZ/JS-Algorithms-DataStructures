class weightedGraph {
    constructor() {
        this.adjecencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjecencyList[vertex]) this.adjecencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjecencyList[vertex1] = this.adjecencyList[vertex1].push({ node: vertex2, weight });
        this.adjecencyList[vertex2] = this.adjecencyList[vertex2].push({ node: vertex1, weight });
    }



}

let graph = new weightedGraph();

graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");

console.log(graph);