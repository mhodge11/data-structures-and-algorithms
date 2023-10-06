// Each child can only have one parent
// Each parent can have two children
// A node without children is a "leaf"

// Binary search tree:
// If child is less than parent, it goes left
// If child is greater than parent, it goes right

// Big O:
// To find, each level is 2^n where n is the level
// To remove, it is the same
// Therefore, they are O(log n)
// Worst case scenario is one that is a straight line
// Worst scenario is O(n)
// Therefore, Big O is technically O(n)
// However, it is treated as a O(log n)

// If you want to have duplicates:
// add count var to Node and uptick with each duplicate

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // create newNode
  // if root === null then root = newNode
  // let temp = this.root
  // while
  //    if newNode === temp return undefined
  //    if < left else > right
  //    if null insert newNode else move to next
  // return entire binary search tree
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) return undefined;

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }

        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }

        temp = temp.right;
      }
    }
  }

  // if root === null return false
  // let temp = this.root
  // while (temp)
  //    if < left
  //    else if > right
  //    else = return true
  // return false
  contains(value) {
    if (!this.root) return false;

    let temp = this.root;

    while (temp) {
      if (value < temp.value) temp = temp.left;
      else if (value > temp.value) temp = temp.right;
      else return true;
    }

    return false;
  }

  minValueNode(currentNode = this.root) {
    if (!currentNode) return undefined;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  maxValueNode(currentNode = this.root) {
    if (!currentNode) return undefined;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode;
  }
}
