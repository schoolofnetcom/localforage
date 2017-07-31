let store = localforage.createInstance({
	driver: localforage.INDEXEDDB,
	name  : 'LOCAL_FORAGE',
	version: 1.0,
	// size: 1
	storeName: 'teachers',
	description: ''
})

let otherStore = localforage.createInstance({
	driver: localforage.INDEXEDDB,
	name  : 'LOCAL_FORAGE',
	version: 2.0,
	// size: 1
	storeName: 'courses',
	description: 'Store courses'
})


store.setItem('key', 'value')
otherStore.setItem('key', 'value')