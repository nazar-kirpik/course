class Node {
    constructor(value) {
        this._value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
        this._length = 0;
    }

    // Insert first node (Head)
    insertFirst(value) {
        const newNode = new Node(value);
        newNode.next = this._head;
        this._head = newNode;
        this._length++;
    }

    // Insert last node (Tail)
    insertLast(value) {
        const newNode = new Node(value);
        let current = this._head;

        while(current.next) {
            current = current.next;
        }

        current.next = newNode;
        this._length++;
    }

    // Insert at index
    insertAt(value, index) {
        if (index > this.length) {
            return;
        }

        if (index === 0) {
            this.insertFirst(value);
            return;
        }

        const newNode = new Node(value);
        let current, previous
        current = this._head;
        let count = 0;

        while(count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.length++;
    }

    // Get at index
    getAt(index) {
        let current = this._head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log(current._value);
            }
            count++;
            current = current.next;
        }
        return null;
    }

    // Remove at index
    removeAt(index) {
        if (index > this.length) {
            return;
        }

        let current = this._head;
        let previous;
        let count = 0;

        if (index === 0) {
            this._head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }

        this._length--;
    }

    // Print list data
    printListData() {
        let current = this._head;
        let list = '';

        while(current) {
            list += current._value + ' ';
            current = current.next;
        }

        console.log(list);
    }

    // Create list
    clearListData() {
        this._head = null;
        this._length = 0;
    }
}

const list = new LinkedList();

list.insertFirst(100);

console.log(list);