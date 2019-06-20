"use strict";
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

class BinaryTreeNode {
  constructor(val = null) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  add(val) {
    if (val < this.val) {
      if (this.left) {
        this.left.add(val);
      } else {
        this.left = new BinaryTreeNode(val);
      }
    } else {
      if (this.right) {
        this.right.add(val);
      } else {
        this.right = new BinaryTreeNode(val);
      }
    }
  }

  preOrder(cb) {
    cb(this.value);
    if (this.left) this.left.preOrder(cb);
    if (this.right) this.right.preOrder(cb);
  }
  postOrder(cb) {
    if (this.left) this.left.postOrder(cb);
    if (this.right) this.right.postOrder(cb);
    callback(this.value);
  }
  inOrder(cb) {
    if (this.left) this.left.inOrder(cb);
    callback(this.value);
    if (this.right) this.right.inOrder(cb);
  }
}

class BinaryTree {
  constructor() {
    this.root = new BinaryTreeNode();
  }

  add(val) {
    if (this.root) this.root.add(val);
    else this.root = new BinaryTreeNode(val);
  }

  breadthFirst(callback) {
    let q = new queue();
    q.enqueue(this.root);
    while (!q.isEmpty()) {
      let n = q.dequeue();
      if (n.left) q.enqueue(n.left);
      if (n.right) q.enqueue(n.right);
      callback(n.value);
    }
  }
}
// dequeue node, then enqueue its children.

let b = new BinaryTree();

b.root.value = 14;
b.root.left = new BinaryTreeNode(99);
b.root.left.left = new BinaryTreeNode(81);
b.root.left.right = new BinaryTreeNode(1);

b.root.right = new BinaryTreeNode(7);
b.root.right.left = new BinaryTreeNode(11);
b.root.right.right = new BinaryTreeNode(10000);

b.root.traverse(console.log);
