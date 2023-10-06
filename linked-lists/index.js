// A "Node" is both a value and a pointer
// { value: 7, next: { value: 4, next: null }}
// "next" points to the next object in the list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  // add new node to end of list
  // return entire linked list
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // remove node from end of list
  // return removed node
  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  // add new node to beginning of list
  // return entire linked list
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  // remove node from beginning of list
  // return removed node
  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;

    this.length--;

    if (this.length === 0) this.tail = null;

    return temp;
  }

  // get node at a particular index
  // return node at index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  // set node at an index to a new value
  // return true or false related to if it can run
  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  // insert node at an index
  // return entire linked list
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return undefined;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;

    return this;
  }

  // remove node at an index
  // return removed node
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;

    this.length--;

    return temp;
  }

  // reverse order of list
  // return entire linked list
  reverse() {
    if (this.length <= 1) return this;

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}
