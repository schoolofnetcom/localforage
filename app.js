let store = localforage.createInstance({
	driver: localforage.INDEXEDDB,
	name  : 'APP',
	version: 1.0,
	storeName: 'teachers',
	description: ''
})


function add() {
	console.log('add')
	store.setItem(Math.round(Math.random()), { name: 'Leonan', age: 21 })
		 .then(value => console.log(value))
}

function list() {
	console.log('list')
	store.getItem('1')
			   .then(value => console.log(value))
}

function remove() {
	console.log('remove')
	store.removeItem('1')
		 .then(() => console.log('removed'))
}

function listall() {
	console.log('list all')
	store.iterate((key, value, index) => {
		console.log(key, value)
	})
}

function clearAll() {
	console.log('clear')
	store.clear()
		        .then(() => {
					console.log('cleared')
				})
}