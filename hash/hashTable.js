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
}

class HashList {
  constructor(size) {
    this.bucketSize = size;
    this.buckets = [];
    for (let i = 0; i < this.bucketSize; i++) {
      this.buckets.push(new LinkedList());
    }
  }

  findHash(key) {
    let hash = 0;
    for (let char of key) {
      hash += char.charCodeAt(0);
    }
    return hash;
  }

  getBucket(key) {
    let index = this.findHash(key) % this.bucketSize;
    return this.buckets[index];
  }

  set(key, value) {
    let obj = { key, value };
    this.getBucket(key).traverse(o => {
      if (o.key == key) {
        o = obj;
        obj = null;
      }
    });
    if (obj) {
      this.getBucket(key).add(obj);
    }
  }

  get(key) {
    let object = null;
    this.getBucket(key).traverse(obj => {
      if (obj.key == key) object = obj;
    }); //Is this a bottleneck?
    return object;
  }
}

let h = new HashList(10);
h.set("Hello", "world!");

//console.time("set");

for (let c of "Welcome to the jungle, we got fun and games.") {
  let count = h.get(c);
  if (count) {
    h.set(c, ++count);
  } else {
    h.set(c, 1);
  }
}
//console.timeEnd("set");
console.log(h);
