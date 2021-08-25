{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  // 한단계 감싸면 "불변성"을 유지해준다.
  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {}
    void: any;

    get size() {
      return this._size;
    }

    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error(`Stack is full!!!!!`);
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }

    pop(): string {
      // null == undefined, null !== undefined
      if (this.head == null) {
        throw new Error(`Stack is empty!!`);
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(20);
  stack.push(`ys1`);
  stack.push(`hallow2`);
  stack.push(`hoho3`);
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
