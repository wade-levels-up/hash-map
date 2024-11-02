import { HashMap, Hash } from "./hash.js"
import LinkedList from "./linkedlist.js"

let hashMap1 = new HashMap;

hashMap1.set('Wade', '33 Male'); // Index 11
hashMap1.set('Wadu', '33 LOL'); // Index 11
hashMap1.set('Courtney', '26 Female');

console.log(hashMap1.remove('Wadek'));

console.log(`--- Hashmap contains ${hashMap1.length()} entries`);

