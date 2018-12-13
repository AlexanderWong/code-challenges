class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    this.head = new Node(value, this.Node);
  }

  traverse(callback) {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }

  remove(value) {
    let current = this.head;
    if (!this.head) {
      return;
    }
    if (value == current.value) {
      this.head = current.next;
    }
    while (current.next.next) {
      if (value == current.next.value) {
        current.next = current.next.next;
      }
      current = current.next;
    }
  }
}

class Stack {
  constructor(store) {
    this.list = store; //composition (more tightly coupled than inheritance)
  }

  push(value) {
    this.list.add(value);
  }

  pop() {
    let node = this.list.head;
    this.list.head = node.next;
    return node.value;
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return !this.list.head;
  }
}

let s = new Stack(new LinkedList());
