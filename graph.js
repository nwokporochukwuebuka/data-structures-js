// creating an undirected and unweighted graph
class Graph {
    constructor () {
        this.adjacentList = new Map();
    }

    // add vertex
    addVertex(node1){
        this.adjacentList.set(node1, []);
    }

    addEdge(node1, node2){
        // undirected graph
        this.adjacentList.get(node1).push(node2);
        this.adjacentList.get(node2).push(node1);
    }

    showConnections(){
        // get all the vertices 
        let keys = this.adjacentList.keys();

        // loop through each vertex
        for (let key of keys){
            let values = this.adjacentList.get(key);
            let text = "";

            // loop through edges 
            for (let value of values) {
                // render the edges that has the same vertex as a string
                text += value + " "
            }

            // render vertices and edges 
            console.log(key + " --> " + text);
        }
    }
}

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "D");
graph.addEdge("F", "E");
graph.addEdge("E", "A");

graph.showConnections();