import { IValueStoreAsync, IValueStoreSync } from '@bombenprodukt/vi-framework';

import { StoreSync } from './sync.js';

export class StoreAsync<T> implements IValueStoreAsync<T> {
	#store: IValueStoreSync<T>;

	public constructor(capacity: number) {
		this.#store = new StoreSync<T>(capacity);
	}

	public async all(): Promise<T[]> {
		return this.#store.all();
	}

	public async put(value: T): Promise<boolean> {
		return this.#store.put(value);
	}

	public async putMany(values: T[]): Promise<boolean[]> {
		return this.#store.putMany(values);
	}

	public async has(value: T): Promise<boolean> {
		return this.#store.has(value);
	}

	public async hasMany(values: T[]): Promise<boolean[]> {
		return this.#store.hasMany(values);
	}

	public async missing(value: T): Promise<boolean> {
		return this.#store.missing(value);
	}

	public async missingMany(values: T[]): Promise<boolean[]> {
		return this.#store.missingMany(values);
	}

	public async forget(value: T): Promise<boolean> {
		return this.#store.forget(value);
	}

	public async forgetMany(values: T[]): Promise<boolean[]> {
		return this.#store.forgetMany(values);
	}

	public async flush(): Promise<boolean> {
		return this.#store.flush();
	}

	public async count(): Promise<number> {
		return this.#store.count();
	}
}
