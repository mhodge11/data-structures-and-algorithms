class BinarySearchTree {
  DFSPreOrder() {
    const results = [];

    function traverse(currentNode) {
      results.push(currentNode.value);

      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root);

    return results;
  }

  DFSPostOrder() {
    const results = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);

      results.push(currentNode.value);
    }

    traverse(this.root);

    return results;
  }

  DFSInOrder() {
    const results = [];

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);

      results.push(currentNode.value);

      if (currentNode.right) traverse(currentNode.right);
    }

    traverse(this.root);

    return results;
  }
}
