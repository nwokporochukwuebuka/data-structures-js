 // in this example we are going to be creating different kinds of data structures
 
// Singly linked list
class LinkedList{
  // creating a constructor function that includes the first element into the linked list
  constructor(value){
    // creating the head node
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    // appending a value to the end of a list
    const newNode = {
      value: value,
      next: null
    };
    // resetting the tail of the head node to the new node
    this.tail.next = newNode;
    // restting the final node to the newly appended node
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value){
    const newHead = {
      value: value,
      next: this.head
    }
    this.head = newHead;
    this.length++;
    return this;
  }
  insert(index, value){
    const newNode = {
      value: value,
      next: null
    }
    if (index == 0) {
      this.prepend(value);
      return this.printList();
    }else if (index >= this.length) {
      this.append(value);
      return this.printList();
    } else {
      for (let i = 0; i < this.length; i++){
        if (i == index){
          const leader = this.traverseToIndex(index-1);
          const holdingPointer = leader.next;
          leader.next = newNode;
          newNode.next = holdingPointer;
          this.length++;
          return this.printList()
        }
      }
    }
    }
  traverseToIndex(index){
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index){
        currentNode = currentNode.next;
        counter++
      }
    return currentNode;
  }

  remove(index){
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList()
  }

  reverse(){
      if (!this.head.next){}
  }
  
  printList(){
    const array = []
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value)
      currentNode = currentNode.next;
    }
    return array;
  }
}


// const myLinkedList = new LinkedList(10)

// myLinkedList.append(9)
// myLinkedList.append(5)
// myLinkedList.append(2)
// myLinkedList.prepend(7)
// myLinkedList.prepend(8)
// console.log(myLinkedList.printList());
// console.log(myLinkedList.insert(3, 99))
// console.log(myLinkedList.reverse())


// Doubly linked list
class DoublyLinkedList{
  // creating a constructor function that includes the first element into the linked list
  constructor(value){
    // creating the head node

    // next is the pointer to the new or next node, while 
    // prev is the pointer to the previous node
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    // appending a value to the end of a list
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    newNode.prev = this.tail
    // resetting the tail of the head node to the new node
    this.tail.next = newNode;
    // restting the final node to the newly appended node
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value){
    const newHead = {
      value: value,
      next: this.head,
      prev: null
    }
    newHead.next = this.head;
    this.head.prev = newHead
    this.head = newHead;
    this.length++;
    return this;
  }
  insert(index, value){
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    if (index == 0) {
      this.prepend(value);
      return this.printList();
    }else if (index >= this.length) {
      this.append(value);
      return this.printList();
    } else {
      for (let i = 0; i < this.length; i++){
        if (i == index){
          const leader = this.traverseToIndex(index-1);
          const follower = leader.next;
          leader.next = newNode;
          newNode.prev = leader;
          newNode.next = follower;
          follower.prev = newNode;
          this.length++;
          return this.printList()
        }
      }
    }
    }
  traverseToIndex(index){
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index){
        currentNode = currentNode.next;
        counter++
      }
    return currentNode;
  }

  remove(index){
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList()
  }

  reverse(){
      if (!this.head.next){
        return this.head;
      }
      let first = this.head;
     // console.log(first);
      this.tail = this.head;
      //console.log(this.tail)
      let second = first.next;
      //console.log(second);
      while(second){
        const temp = second.next;
        console.log(temp);
        second.next = first;
        console.log(first)
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.head = first;
      return this;
  }
  
  printList(){
    const array = []
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value)
      currentNode = currentNode.next;
    }
    return array;
  }
}


const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2, 9));
console.log(myLinkedList.remove(4));
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());


