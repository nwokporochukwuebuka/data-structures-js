// creating an undirected and unweighted graph
class Graph {
    constructor () {
        this.numberOfNodes = 0;
        this.adjacentList = {

        };
    }

    addVertex(){
        this.adjacentList[node] = [];
        this.numberOfNodes ++;
    }

    addEdge(node1, node2){
        // undirected graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections(){

    }
}