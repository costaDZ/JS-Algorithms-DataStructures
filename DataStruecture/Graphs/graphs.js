class Graph {
    constructor() {
        this.adjecencyList = {};
    }

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
            this.removeEdge(prop, vertex)
        }
        delete this.adjecencyList[vertex];
    }
}


let list = new Graph();

list.addVertex("Tokyo");
list.addVertex("Berlin");
list.addVertex("London");
list.addVertex("Moscow");


list.addEdge("Tokyo", "Berlin");
list.addEdge("Berlin", "Moscow");
list.addEdge("London", "Moscow");
list.addEdge("Tokyo", "Moscow");
list.addEdge("Berlin", "London");


// list.removeEdge("Berlin", "Moscow");
// list.removeEdge("London", "Moscow");

// list.removerVertex("London");
// list.removerVertex("Berlin");





console.log(list);