export class Queue<T> {
  currQueue: T[];

  constructor(initialQueue: T[] = []) {
    this.currQueue = initialQueue;
  }

  pop() {
    return this.currQueue.pop();
  }

  unshift(el: T) {
    return this.currQueue.unshift(el);
  }

  all() {
    return this.currQueue;
  }
}
