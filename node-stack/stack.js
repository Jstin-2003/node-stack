class Stack {
  constructor(maxSize = Infinity) {
    this.items = [];
    this.maxSize = maxSize;
  }

  push(element) {
    if (this.size() >= this.maxSize) {
      throw new Error("Stack Overflow: Cannot add element, stack is full");
    }
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow: Cannot remove element, stack is empty");
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty: Cannot peek");
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  reverse() {
    this.items.reverse();
  }

  forEach(callback) {
    for (let i = 0; i < this.items.length; i++) {
      callback(this.items[i], i);
    }
  }

  toArray() {
    return [...this.items];
  }

  printStack() {
    return this.items.join(" ");
  }

  clear() {
    this.items = [];
  }

  duplicate() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const topElement = this.peek();
    this.push(topElement);
  }

  swap() {
    if (this.size() < 2) {
      throw new Error("Stack must contain at least two elements to swap");
    }
    const top = this.pop();
    const second = this.pop();
    this.push(top);
    this.push(second);
  }

  multiPush(elements) {
    if (this.size() + elements.length > this.maxSize) {
      throw new Error("Stack Overflow: Cannot add elements, stack is full");
    }
    elements.forEach((el) => this.push(el));
  }

  search(element) {
    const index = this.items.lastIndexOf(element);
    if (index === -1) {
      return -1;
    }
    return this.size() - index;
  }
}

module.exports = Stack
