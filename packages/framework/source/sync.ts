export interface IValueStoreSync<T> {
	/**
	 * Get all of the items in the store.
	 */
	all(): T[];

	/**
	 * Store an item in the store.
	 */
	put(value: T): boolean;

	/**
	 * Store multiple items in the store.
	 */
	putMany(values: T[]): boolean[];

	/**
	 * Determine if an item exists in the store.
	 */
	has(value: T): boolean;

	/**
	 * Determine multiple items exist in the store.
	 */
	hasMany(values: T[]): boolean[];

	/**
	 * Determine if an item doesn't exist in the store.
	 */
	missing(value: T): boolean;

	/**
	 * Determine multiple items don't exist in the store.
	 */
	missingMany(values: T[]): boolean[];

	/**
	 * Remove an item from the store.
	 */
	forget(value: T): boolean;

	/**
	 * Remove multiple items from the store.
	 */
	forgetMany(values: T[]): boolean[];

	/**
	 * Remove all items from the store.
	 */
	flush(): boolean;

	/**
	 * Count the number of items in the store.
	 */
	count(): number;
}
