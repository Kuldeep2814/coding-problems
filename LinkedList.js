/* This question focuses on data structures and their implementation 
in JavaScript, specifically the Linked List. Demonstrating proficiency 
in data structures showcases a developer’s ability to design efficient 
and scalable solutions.
 Task: Implement a Linked List in JavaScript with the following operations:
 insert(value): Inserts a new node with the given value at the end of the list.
 delete(value): Removes the first occurrence of the node with the given value from the list.
 search(value): Returns true if a node with the given value exists in the 
 list, false otherwise.*/

 class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Inserts a new node with the given value at the end of the list.
    insert(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Removes the first occurrence of the node with the given value from the list.
    delete(value) {
      if (!this.head) {
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
  
    // Returns true if a node with the given value exists in the list, false otherwise.
    search(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }
  
  // Example usage:
  const myList = new LinkedList();
  myList.insert(1);
  myList.insert(2);
  myList.insert(3);
  
  console.log(myList.search(2)); // Output: true
  myList.delete(2);
  console.log(myList.search(2)); // Output: false
  