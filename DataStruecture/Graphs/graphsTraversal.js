
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

    depthFirstTraversal(strVtx) {

        // let test = this.adjecencyList[strVtx];

        let list = [];
        let visited = {};

        function DFS(Vtx) {
            if (!Vtx.length) return null;

            visited[Vtx] = true;
            list.push(Vtx);

            console.log(Vtx);

            for (let val of this.adjecencyList[Vtx]) {
                if (!visited[val]) {
                    DFS(val)
                }
            }
        }

        DFS(strVtx);

        return list;
    }
}


let list = new Graph();






list.addVertex("A")
list.addVertex("B")
list.addVertex("C")
list.addVertex("D")
list.addVertex("E")
list.addVertex("F")


list.addEdge("A", "B")
list.addEdge("A", "C")
list.addEdge("B", "D")
list.addEdge("C", "E")
list.addEdge("D", "E")
list.addEdge("D", "F")
list.addEdge("E", "F")
console.log(list);

console.log(list.depthFirstTraversal("A"));

console.log(list);