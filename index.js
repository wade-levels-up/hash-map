import { HashMap, Hash } from "./hash.js"
import LinkedList from "./linkedlist.js"

let hashMap1 = new HashMap;

hashMap1.set('Wade', '33 Male');
hashMap1.set('Wadf', '67 Nload');
hashMap1.set('Wadd', '21 Nload');
hashMap1.set('Wadg', '67 Nload');
hashMap1.set('Wadh', '67 Nload');
hashMap1.set('Wadi', '67 Nload');
hashMap1.set('Wadj', '67 Nload');
hashMap1.set('Wadk', '67 Nload');
hashMap1.set('Wadl', '67 Nload');
hashMap1.set('Wadm', '67 Nload');
hashMap1.set('Wadn', '67 Nload');
hashMap1.set('Wado', '67 Nload');
hashMap1.set('Wadp', '67 Nload');
hashMap1.set('Wadq', '67 Nload');
hashMap1.set('Wadr', '67 Nload');
hashMap1.set('Wads', '67 Nload');
hashMap1.set('Wadt', '67 Nload');
hashMap1.set('Wadu', '67 Nload');


console.log(hashMap1.buckets[11].find('Wadu'));
