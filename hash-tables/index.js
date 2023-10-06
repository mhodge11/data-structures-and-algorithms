// Collisions:
// Separate chaining: put item at same address in array
// Linear probing: search root array until finding open address

// Optimal structure of hash table has a prime number of addresses; e.g. 7

// Big O:
// _hash method is O(1) (constant time)
// set is O(1)
// get is O(1) because collisions are rare

class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      // 23 is used because it is a prime number
      // this makes the list more random (GOOD)
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.dataMap[index]) this.dataMap[index] = [];

    this.dataMap[index].push([key, value]);

    return this;
  }

  get(key) {
    const index = this._hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) return this.dataMap[index][i][1];
      }
    }

    return undefined;
  }

  keys() {
    const allKeys = [];

    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }

    return allKeys;
  }
}
