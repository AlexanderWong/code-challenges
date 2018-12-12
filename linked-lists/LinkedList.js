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

let list = new LinkedList();
list.add("1");
list.add("2");
list.add("3");
list.add("4");
list.add("5");

//return the value k elements away from the end of a linked list
function kthLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

function reverseList(list) {
  let previous = null;
  let current = list.head;
  while (current) {
    const temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return previous;
}

//separates even and odd values within the linked list.
function partition(list) {
  let slow = list.head;

  while (slow.next) {
    if (slow.next.value % 2 !== 0) {
      let temp = slow.next;
      slow.next = slow.next.next;
      temp.next = list.head;
      list.head = temp;
    } else {
      slow = slow.next;
    }
  }
}
