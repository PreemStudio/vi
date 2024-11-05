export interface IValueStoreAsync<T> {
	/**
	 * Get all of the items in the store.
	 */
	all(): Promise<T[]>;

	/**
	 * Store an item in the store.
	 */
	put(value: T): Promise<boolean>;

	/**
	 * Store multiple items in the store.
	 */
	putMany(values: T[]): Promise<boolean[]>;

	/**
	 * Determine if an item exists in the store.
	 */
	has(value: T): Promise<boolean>;

	/**
	 * Determine multiple items exist in the store.
	 */
	hasMany(values: T[]): Promise<boolean[]>;

	/**
	 * Determine if an item doesn't exist in the store.
	 */
	missing(value: T): Promise<boolean>;

	/**
	 * Determine multiple items don't exist in the store.
	 */
	missingMany(values: T[]): Promise<boolean[]>;

	/**
	 * Remove an item from the store.
	 */
	forget(value: T): Promise<boolean>;

	/**
	 * Remove multiple items from the store.
	 */
	forgetMany(values: T[]): Promise<boolean[]>;

	/**
	 * Remove all items from the store.
	 */
	flush(): Promise<boolean>;

	/**
	 * Count the number of items in the store.
	 */
	count(): Promise<number>;
}
