// Node is called "Vertex" in a graph
// Link between vertices is called an "Edge" (sometimes "Connection")
// No arrows in graphical depiction means bidirectional (Facebook friends)
// One arrow in graphical depiction means one-directional (Twitter followers)
// Binary Search Tree is a type of graph
// Linked List is a type of graph

// Big O:
// E is Edge
// V is Vertex
//
// ADJACENCY LIST { A: ["B", "E"], B: ["A", "C"], ... }
// space complexity: O(V + E)
// insert: O(1)
// remove edge: O(E)
// remove vertex: O(V + E)
//
// ADJACENCY MATRIX ...
// space complexity: O(V^2)
// insert: O(n)
// remove edge: O(1)
// remove vertex: O(V^2)

// Graph below is bidirectional

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }

    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);

      return true;
    }

    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );

      return true;
    }

    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;

    while (this.adjacencyList[vertex].length) {
      const temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }

    delete this.adjacencyList[vertex];

    return this;
  }
}
