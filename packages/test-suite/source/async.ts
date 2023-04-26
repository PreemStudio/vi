import { beforeEach, expect, it } from 'vitest';

import { IValueStoreAsync } from '@bombenprodukt/vi-framework';

export const complianceTestsAsync = <V>(
	store: IValueStoreAsync<V>,
	items: V[],
): void => {
	const itemsBool: boolean[] = new Array(5).fill(true);

	beforeEach(() => {
		store.flush();
	});

	it('should get all of the items in the store', async () => {
		await store.putMany(items);

		await expect(store.all()).resolves.toEqual(items);
	});

	it('should put an item into the store', async () => {
		await expect(store.put(items[0]!)).resolves.toBe(true);
	});

	it('should put many items into the store', async () => {
		await expect(store.putMany(items)).resolves.toEqual(itemsBool);
	});

	it('should be missing all items from the store', async () => {
		for (const item of items) {
			await expect(store.missing(item)).resolves.toBe(true);
		}
	});

	it('should remove an item from the store', async () => {
		await expect(store.put(items[0]!)).resolves.toBe(true);
		await expect(store.forget(items[0]!)).resolves.toBe(true);
	});

	it('should remove many items from the store', async () => {
		await expect(store.putMany(items)).resolves.toEqual(itemsBool);
		await expect(store.forgetMany(items)).resolves.toEqual(itemsBool);
	});

	it('should remove all items from the store', async () => {
		await expect(store.putMany(items)).resolves.toEqual(itemsBool);
		await expect(store.flush()).resolves.toBe(true);
	});
};
