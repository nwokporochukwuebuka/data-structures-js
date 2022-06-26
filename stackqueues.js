// coding with a linked list i.e implementation with linked list

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // operations we want to carry out
    peek(){
        // see the top element
        return this.top;
    }

    push(value){
        // this operation appends to a stack
        const newNode = new Node(value);
        if (this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop(){
        // this operation removes the last element
        if(!this.top){
            return null;
        }
        if (this.top === this.bottom){
            this.bottom = null;
        }

        // const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }

}

// const myStack = new Stack();
// console.log(myStack.push('google'))
// console.log(myStack.push('Discord'));
// console.log(myStack.push('udemy'));
// console.log('---------');
// console.log(myStack.peek());
// console.log('-------------');
// console.log('popping an item');
// console.log(myStack.pop())
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        // this is to check the first element
        return this.first;
    }

    enqueue(value){
        // this method adds element to the queue
        const newNode = new Node(value);
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last = newNode;
            this.last.next = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        // this process removes the first element from the queue
        if (!this.first){
            return null;
        }

        if (this.first === this.last){
            this.last = null;
        }
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue()
console.log(myQueue.enqueue('Joy'));
console.log(myQueue.enqueue('Tobi'));
console.log(myQueue.enqueue('Tiana'));
console.log(myQueue.enqueue('Chijioke'));
console.log(myQueue.dequeue());