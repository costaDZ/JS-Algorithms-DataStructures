class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkdeList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }


    push(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    unshift(val) {
        let newNode = new Node(val);
        let temp = this.head;
        this.head = newNode;
        this.head.next = temp;
        this.length++;
    }

    pop() {
        if (!this.length) return undefined;


        let currentNode = this.head;
        let i = 0;


        while (i < this.length - 1) {

            console.log(currentNode);
            currentNode = currentNode.next;

            if (currentNode.next === this.tail) {
                console.log(true);
                currentNode.next = null
            }

        }


        //  console.log(currentNode);


    }

}

let list = new SinglyLinkdeList();

list.push("1");
list.push("2");
list.push("3");
list.push("4");

// list.unshift("0");
// list.unshift("-1");
// list.unshift("-2");

console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list);
// console.log(list.pop());







console.log(list);