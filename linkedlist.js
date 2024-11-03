import { Hash } from "./hash.js";

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append = function (key, value) {
    let newNode = new Hash(key, value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
  };

  prepend = function (key, value) {
    let newNode = new Hash(key, value);
    newNode.next = this.head;
    this.head = newNode;
  };

  size = function () {
    let count = 0;
    let node = this.head;
    while (node) {
      count += 1;
      node = node.next;
    }
    return count;
  };

  headNode = function () {
    return this.head;
  };

  tail = function () {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node.data;
  };

  at = function (index, key) {
    let position = 0;
    let node = this.head;
    while (node && position <= index) {
      for (let property in node) {
        if (node.hasOwnProperty(key)) {
          return node[key];
        }
      }
      position += 1;
      node = node.next;
    }
    return null;
  };

  pop = function () {
    let currentNode = this.head;
    let previousNode = this.head;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
  };

  contains = function (value) {
    let isTrue = false;
    let node = this.head;
    while (node) {
      for (let property in node) {
        if (node.hasOwnProperty(value)) {
          isTrue = true;
          break; // Exit the loop early if the value is found
        }
      }
      if (isTrue) break; // Exit the outer loop early if the value is found
      node = node.next;
    }
    return isTrue;
  };

  find = function (value) {
    let position = 0;
    let node = this.head;
    if (this.head === null) {
      return null;
    } else {
      while (node) {
        for (let property in node) {
          if (node.hasOwnProperty(value)) {
            return position;
          }
        }
        position += 1;
        node = node.next;
      }
    }
  };

  toArray = function () {
    let node = this.head;
    let array = [];
    while (node) {
      for (let key in node) {
        if (key !== "next") {
          array.push(`${key}`);
        }
      }
      node = node.next;
    }
    return array;
  };

  toValueArray = function () {
    let node = this.head;
    let array = [];
    while (node) {
      for (let key in node) {
        if (key !== "next") {
          array.push(node[key]);
        }
      }
      node = node.next;
    }
    return array;
  };

  toKeyValueArray = function () {
    let node = this.head;
    let array = [];
    while (node) {
      for (let key in node) {
        if (key !== "next") {
          array.push([key, node[key]]);
        }
      }
      node = node.next;
    }
    return array;
  };

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.log(`Invalid index ${index} for removeAt`);
      return null;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    return current;
  }

  insertAt(key, value, index) {
    if (index < 0 || index > this.size()) {
      console.log(`Invalid index ${index} for insertAt`);
      return null;
    }

    let newNode = new Hash(key, value);
    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
  }
}
