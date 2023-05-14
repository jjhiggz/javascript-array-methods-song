export class Stack<T> {
  currStack: T[];

  constructor(initialStack: T[] = []) {
    this.currStack = initialStack;
  }

  pop() {
    return this.currStack.pop();
  }

  push(el: T) {
    return this.currStack.push(el);
  }

  all() {
    return this.currStack;
  }
}
