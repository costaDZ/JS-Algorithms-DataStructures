
class Graph {
    constructor() {
        this.adjecencyList = {};
    }
    // test 

    addVertex(vertex) {
        if (!this.adjecencyList[vertex]) {
            this.adjecencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjecencyList[vertex1].push(vertex2);
        this.adjecencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjecencyList[vertex1] =
            this.adjecencyList[vertex1].filter(v => v !== vertex2);
        this.adjecencyList[vertex2] =
            this.adjecencyList[vertex2].filter(v => v !== vertex1);
    }

    removerVertex(vertex) {
        for (let prop in this.adjecencyList) {
            this.removeEdge(prop, vertex);
        }
        delete this.adjecencyList[vertex];
    }
}


let list = new Graph();






g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(list);