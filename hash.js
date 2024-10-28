import LinkedList from "./linkedlist.js";

export class HashMap {
    constructor(loadFactor = 0.75) {
        this.loadFactor = loadFactor;
        this.buckets = this.populateBuckets(16);
    }

    populateBuckets(value) {
        let array = [];
        for (let i = 0; i < value; i++) {
            this.buckets = array.push(new LinkedList);
        }
        return array;
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
    } 

    set(key, value) {}

    get(key) {}

    has(key) {}

    remove(key) {
    }

    length() {
        // returns the number of stored keys in the hash map
    }

    clear() {
        // removes all entries within the hash map
    }

    keys() {
        // returns an array containing all the keys in the hash map
    }

    values() {}

    entries() {}
}

export class Hash {
    constructor(key = null, value = null, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}