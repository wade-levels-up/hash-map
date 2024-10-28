export default class HashMap {
    constructor() {

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