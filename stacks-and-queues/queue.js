class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(value) {
    let nn = new Node(value, this.Node);
    nn.next = this.head;
    this.head = nn;
    if (this.head.next == null);
    this.tail = this.head;
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

class Queue {
  constructor(store) {
    this.list = store; //composition (more tightly coupled than inheritance)
  }

  enqueue(value) {
    let newNode = new Node(value);
    this.list.tail.next = newNode;
    this.list.tail = newNode;
  }

  dequeue() {
    let out = this.list.head;
    this.list.head.next - out.next;
    return out.value;
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return !this.list.head;
  }
}
