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
        console.log(`Hashing: ${key}`) // REMOVE
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }
        console.log(`Returning ${key}, hashed to ${hashCode}`);
        return hashCode;
    } 

    // Remember to grow bucket size when it needs to when it reaches
    // it's load factor, this will happen in set function

    set(key, value) {
        let bucketIndex = this.hash(key);
        if (this.buckets[bucketIndex].contains(key)) {
            let idToRm = this.buckets[bucketIndex].find(key);
            console.log(`Bucket already contains ${key}`);
            console.log(`Overwriting ${key} with new value: ${key}: ${value}`);
            this.buckets[bucketIndex].removeAt(idToRm);
            this.buckets[bucketIndex].insertAt(key, value, idToRm);
            console.log(`bucket now contains ${this.buckets[bucketIndex]}`);
        } else {
            this.buckets[bucketIndex].append(key, value);
        }
    }

    get(key) {
        console.log(`Finding value stored in key: ${key}`);
        let hashIndex = this.hash(key);
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
        let bucket = this.buckets[hashIndex];
        if (bucket.contains(key)) {
            return true;
        }
        return false;
    }

    remove(key) {
        console.log(`Deleting entry stored in key: ${key}`);
        let hashIndex = this.hash(key);
        let bucket = this.buckets[hashIndex];
        if (bucket.contains(key)) {
            let nodeIndex = bucket.find(key);
            bucket.removeAt(nodeIndex);
            return true;
        }
        return false;
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

// export class Hash {
//     constructor(key = null, value = null, next = null) {
//         this.key = key;
//         this.value = value;
//         this.next = next;
//     }
// }

export class Hash {
    constructor(key = null, value = null, next = null) {
        this[key] = value;
        this.next = next;
    }
}