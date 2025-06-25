export class LRUNode {
	next: LRUNode | null = null;
	prev: LRUNode | null = null;
	constructor(
		public key: number,
		public value: number,
	) {}
}

export class LRUCache {
	private cache: Map<number, LRUNode>;
	private head: LRUNode;
	private tail: LRUNode;

	public constructor(private capacity: number) {
		this.cache = new Map<number, LRUNode>();
		/** Initialize two dummy node so that we don't have to deal with empty list edge cases */
		this.head = new LRUNode(0, 0);
		this.tail = new LRUNode(0, 0);
		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	public put(key: number, value: number): void {
		let node = this.cache.get(key);
		if (node) this.unlink(node);
		node = new LRUNode(key, value);
		this.link(node);
		this.cache.set(key, node);
		if (this.cache.size <= this.capacity) return;
		const oldest = this.tail.prev;
		this.unlink(oldest!);
		this.cache.delete(oldest!.key);
	}

	public get(key: number): number {
		const node = this.cache.get(key);
		if (!node) return -1;
		this.unlink(node);
		this.link(node);
		return node.value;
	}

  /** Unlinks the given node from the linked list */
	private unlink(node: LRUNode): void {
		node.next!.prev = node.prev;
		node.prev!.next = node.next;
    node.next = null;
    node.prev = null;
	}

  /** Links the given node to the linked list head */
	private link(node: LRUNode): void {
		node.next = this.head.next;
		node.prev = this.head;
		this.head.next!.prev = node;
		this.head.next = node;
	}
}
