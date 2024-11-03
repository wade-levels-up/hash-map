import LinkedList from "./linkedlist.js";

export class HashMap {
  constructor(loadFactor = 0.75) {
    this.loadFactor = loadFactor;
    this.buckets = this.populateBuckets(16);
  }

  growCapacity() {
    let currentData = this.entries();
    let newList = [];
    for (let i = 0; i < this.buckets.length + 16; i++) {
      newList.push(new LinkedList());
    }
    this.buckets = newList;
    for (let entry of currentData) {
      this.reSet(entry[0], entry[1]);
    }
  }

  populateBuckets(value) {
    let array = [];
    for (let i = 0; i < value; i++) {
      this.buckets = array.push(new LinkedList());
    }
    return array;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }
    return hashCode;
  }

  set(key, value) {
    let currentEntriesTotal = this.length();
    if (currentEntriesTotal + 1 > this.buckets.length * this.loadFactor) {
      this.growCapacity();
    }
    let bucketIndex = this.hash(key);
    if (bucketIndex < 0 || bucketIndex >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.buckets[bucketIndex].contains(key)) {
      let idToRm = this.buckets[bucketIndex].find(key);
      this.buckets[bucketIndex].removeAt(idToRm);
      this.buckets[bucketIndex].insertAt(key, value, idToRm);
    } else {
      this.buckets[bucketIndex].append(key, value);
    }
  }

  reSet(key, value) {
    let bucketIndex = this.hash(key);
    if (bucketIndex < 0 || bucketIndex >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    if (this.buckets[bucketIndex].contains(key)) {
      let idToRm = this.buckets[bucketIndex].find(key);
      this.buckets[bucketIndex].removeAt(idToRm);
      this.buckets[bucketIndex].insertAt(key, value, idToRm);
    } else {
      this.buckets[bucketIndex].append(key, value);
    }
  }

  get(key) {
    console.log(`Finding value stored in key: ${key}`);
    let hashIndex = this.hash(key);
    if (hashIndex < 0 || hashIndex >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    let bucket = this.buckets[hashIndex];
    if (bucket.contains(key)) {
      let nodeIndex = bucket.find(key);
      return bucket.at(nodeIndex, key);
    }
    return null;
  }

  has(key) {
    console.log(`Finding if ${key} is in the hash map`);
    let hashIndex = this.hash(key);
    if (hashIndex < 0 || hashIndex >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    let bucket = this.buckets[hashIndex];
    if (bucket.contains(key)) {
      return true;
    }
    return false;
  }

  remove(key) {
    console.log(`Deleting entry stored in key: ${key}`);
    let hashIndex = this.hash(key);
    if (hashIndex < 0 || hashIndex >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    let bucket = this.buckets[hashIndex];
    if (bucket.contains(key)) {
      let nodeIndex = bucket.find(key);
      console.log(`Removing node at index: ${nodeIndex}`);
      bucket.removeAt(nodeIndex);
      return true;
    }
    return false;
  }

  length() {
    let total = 0;
    for (let bucket of this.buckets) {
      total += bucket.size();
    }
    return total;
  }

  clear() {
    this.buckets = this.populateBuckets(16);
  }

  keys() {
    let keys = [];
    let keysSorted = [];
    for (let bucket of this.buckets) {
      if (bucket.head) {
        keys.push(bucket.toArray());
      }
    }
    for (let arr of keys) {
      for (let element of arr) {
        keysSorted.push(element);
      }
    }
    return keysSorted;
  }

  values() {
    let keys = [];
    let keysSorted = [];
    for (let bucket of this.buckets) {
      if (bucket.head) {
        keys.push(bucket.toValueArray());
      }
    }
    for (let arr of keys) {
      for (let element of arr) {
        keysSorted.push(element);
      }
    }
    return keysSorted;
  }

  entries() {
    let keys = [];
    let keysSorted = [];
    for (let bucket of this.buckets) {
      if (bucket.head) {
        keys.push(bucket.toKeyValueArray());
      }
    }
    for (let arr of keys) {
      for (let element of arr) {
        keysSorted.push(element);
      }
    }
    return keysSorted;
  }
}

export class Hash {
  constructor(key = null, value = null, next = null) {
    this[key] = value;
    this.next = next;
  }
}
