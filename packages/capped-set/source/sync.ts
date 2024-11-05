import { IValueStoreSync } from '@faustbrian/vi-framework';

export class StoreSync<T> implements IValueStoreSync<T> {
	#store: Set<T>;
	#queue: T[];
	#capacity: number;

	public constructor(capacity: number) {
		this.#store = new Set<T>();
		this.#queue = [];
		this.#capacity = capacity;
	}

	public all(): T[] {
		return Array.from(this.#store);
	}

	public put(value: T): boolean {
		if (this.#store.has(value)) {
			return false;
		}

		if (this.#store.size >= this.#capacity) {
			const oldestItem = this.#queue.shift();
			this.#store.delete(oldestItem as T);
		}

		this.#store.add(value);
		this.#queue.push(value);

		return true;
	}

	public putMany(values: T[]): boolean[] {
		return values.map((value) => this.put(value));
	}

	public has(value: T): boolean {
		return this.#store.has(value);
	}

	public hasMany(values: T[]): boolean[] {
		return values.map((value) => this.has(value));
	}

	public missing(value: T): boolean {
		return !this.has(value);
	}

	public missingMany(values: T[]): boolean[] {
		return values.map((value) => this.missing(value));
	}

	public forget(value: T): boolean {
		if (this.#store.delete(value)) {
			const index = this.#queue.indexOf(value);

			if (index !== -1) {
				this.#queue.splice(index, 1);
			}

			return true;
		}

		return false;
	}

	public forgetMany(values: T[]): boolean[] {
		return values.map((value) => this.forget(value));
	}

	public flush(): boolean {
		this.#store.clear();
		this.#queue = [];

		return true;
	}

	public count(): number {
		return this.#store.size;
	}
}
