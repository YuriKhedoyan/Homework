class LinkedList {
  constructor() {
    this.head = null;
    this.lastElement = null;
  }

  createElem(data) {
    const node = { data, next: null };

    if (this.lastElement) {
      this.lastElement.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.lastElement = node;
  }

  update(data, newData) {
    let current = this.head;

    while (current.next) {
      if (current.data === data) {
        current.data = newData;
      }

      current = current.next;
    }
  }

  delete(data) {
    let current = this.head;

    if (current.next) {
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
        }

        current = current.next;
      }
    } else {
      this.head = null;
      this.lastElement = null;
    }
  }
}