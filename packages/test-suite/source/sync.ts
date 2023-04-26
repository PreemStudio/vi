import { beforeEach, expect, it } from 'vitest';

import { IValueStoreSync } from '@bombenprodukt/vi-framework';

export const complianceTestsSync = <V>(
	store: IValueStoreSync<V>,
	items: V[],
): void => {
	const itemsBool: boolean[] = new Array(5).fill(true);

	beforeEach(() => {
		store.flush();
	});

	it('should get all of the items in the store', () => {
		store.putMany(items);

		expect(store.all()).toEqual(items);
	});

	it('should put an item into the store', () => {
		expect(store.put(items[0]!)).toBe(true);
	});

	it('should put many items into the store', () => {
		expect(store.putMany(items)).toEqual(itemsBool);
	});

	it('should be missing all items from the store', () => {
		for (const item of items) {
			expect(store.missing(item)).toBe(true);
		}
	});

	it('should remove an item from the store', () => {
		expect(store.put(items[0]!)).toBe(true);
		expect(store.forget(items[0]!)).toBe(true);
	});

	it('should remove many items from the store', () => {
		expect(store.putMany(items)).toEqual(itemsBool);
		expect(store.forgetMany(items)).toEqual(itemsBool);
	});

	it('should remove all items from the store', () => {
		expect(store.putMany(items)).toEqual(itemsBool);
		expect(store.flush()).toBe(true);
	});
};
