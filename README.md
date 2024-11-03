# hash-map

This was a project I undertook as part of The Odin Project

The objective was to create a HashMap class which contains an array made of buckets (sub-arrays that are linked lists).
The HashMap class had to have the following methods: get(key), has(key), remove(key), length(), clear(), keys(), values(), and entries().

I found this to be a challenging project that I completed over the course of a a few days, fortunately I'd done a linked list project prior so I was able to reuse the code from that and adjust it where necessary for this project. Along the way I improved some of the methods within my linked list class that weren't working as intended, so that was a bonus.
Making the hashmap array size expand once it reaches it's load factor was a bit tricky as it required every value already in the array to be rehashed again into the expanded list when it grew so that the keys still matched up with their correct buckets.
