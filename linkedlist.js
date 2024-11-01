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
  
    at = function (index) {
      let position = 0;
      let node = this.head;
      while (node && position < index) {
        position += 1;
        node = node.next;
      }
      return node.value;
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
  
    // find = function (value) {
    //   let position = 0;
    //   let node = this.head;
    //   while (node) {
    //     if (node.value !== value) {
    //       position += 1;
    //       node = node.next;
    //     } else {
    //       return position;
    //     }
    //   }
    //   return null;
    // };

    find = function (value) {
      let position = 0;
      let node = this.head;
      if (this.head === null) {
        return null;
      } else {
        while(node) {
          for (let property in node) {
            if (node.hasOwnProperty(value)) {
              return position;
            }
          }
          position += 1;
          node = node.next;
        }
      }
    }
  
    toString = function () {
      let node = this.head;
      let string = "";
      while (node) {
        for (let key in node) {
          if (key !== 'next') {
            string += `( ${key}: ${node[key]} ) -> `;
          }
        }
        node = node.next;
      }
      string += `null`;
      return string;
    };
  
    insertAt = function (key, value, index) {
      let newNode = new Hash(key, value);
      let position = 0;
      let node = this.head;
      while (node) {
        if (position === index - 1) {
          newNode.next = node.next;
          node.next = newNode;
          break;
        } else {
          position += 1;
          node = node.next;
        }
      }
    };
  
    removeAt = function (index) {
      let position = 0;
      let node = this.head;
      while (node.next) {
        if (position === index && position === 0) {
          this.head = node.next;
          break;
        }
        if (position === index - 1) {
          node.next = node.next.next;
          break;
        } else {
          position += 1;
          node = node.next;
        }
      }
    };
  }