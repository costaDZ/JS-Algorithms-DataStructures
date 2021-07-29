



// class HashTable {
//     constructor(size = 53) {
//         this.keyMap = new Array(size);
//     }

//     _hash(key) {
//         let total = 0;
//         let WEIRD_PRIME = 31;
//         for (let i = 0; i < Math.min(key.length, 100); i++) {
//             let char = key[i];
//             let value = char.charCodeAt(0) - 96;
//             total = (total * WEIRD_PRIME + value);
//         }
//         return total % this.keyMap.length;
//     }

//     set(key, value) {
//         let hashResult = this._hash(key);
//         let theSpot = this.keyMap[hashResult];
//         if (!theSpot) {
//             this.keyMap[hashResult] = (new Array([key, value]))
//         } else {
//             this.keyMap[hashResult].push([key, value])
//         }
//         return this.keyMap;
//     }

//     get(key) {
//         let hashResult = this._hash(key);
//         let theSpot = this.keyMap[hashResult];
//         if ((theSpot.length === 1) && (theSpot[0][0] === key)) {
//             return theSpot[0][1];
//         } else if (theSpot.length > 1) {
//             return theSpot.find(item => item[0] === key)[1];
//         }
//         return undefined;
//     }


//     // set(key, value) {
//     //     let index = this._hash(key);
//     //     if (!this.keyMap[index]) {
//     //         this.keyMap[index] = [];
//     //     }
//     //     this.keyMap[index].push([key, value]);
//     // }
//     // get(key) {
//     //     let index = this._hash(key);
//     //     if (this.keyMap[index]) {
//     //         for (let i = 0; i < this.keyMap[index].length; i++) {
//     //             if (this.keyMap[index][i][0] === key) {
//     //                 return this.keyMap[index][i][1]
//     //             }
//     //         }
//     //     }
//     //     return undefined;
//     // }


//     values() {
//         let result = [];
//         let arr = this.keyMap;
//         let i = 0;
//         while (i < arr.length) {
//             if (arr[i]) {
//                 arr[i].map(e => {
//                     if (!result.includes(e[1])) {
//                         result.push(e[1]);
//                     }
//                 })
//             }
//             i++;
//         }
//         return result;
//     }

//     keys() {
//         let result = [];
//         let arr = this.keyMap
//         let i = 0;
//         while (i < arr.length) {
//             if (arr[i]) {
//                 arr[i].map(e => {
//                     if (!result.includes(e[0])) {
//                         result.push(e[0]);
//                     }
//                 })
//             }
//             i++;
//         }
//         return result;
//     }
// }

// let list = new HashTable(5);

// list.set("red", "1111")
// list.set("dark", "2222")
// list.set("blue", "3333")
// list.set("black", "4444")
// list.set("green", "5555")
// list.set("purpule", "6666")
// list.set("cyan", "77777")
// list.set("grey", "8888")


// console.log(list)

// console.log(list.values());
// console.log(list.keys());








