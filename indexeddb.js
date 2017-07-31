window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
window.IDBTransaction  = window.IDBTransaction  || window.webkitIDBTransaction || window.msIDBTransaction || window.mozIDBTransaction
window.IDBKeyRange  = window.IDBKeyRange  || window.webkitIDBKeyRange || window.msIDBKeyRange || window.mozIDBKeyRange

if (!window.indexedDB) {
	alert('Does not supported')
}

let request = window.indexedDB.open('DB_NAME', 1)
let db;

request.onerror = (e) => {
	console.log('Something went wrong -> ' + e)
}

request.onsuccess = (e) => {
	console.log('Open success -> ', e)
	db = request.result

	let trans = db.transaction(['teachers'], 'readwrite')
	  		 	  .objectStore('teachers')
	

	for (let i in data) {
		trans.add(data[i])
	}
}

request.onupgradeneeded = (e) => {
	let db = e.target.result

	let objectStore = db.createObjectStore('teachers', { autoIncrement: true })
	objectStore.createIndex('name', 'name', { unique: false })
}

const data = [{
	name: 'Leonan',
	age: 21
}, {
	name: 'Victor',
	age: 22

}, {
	name: 'Luiz',
	age: 23
}]

function list() {
	console.log('listing')

	let transaction = db.transaction(['teachers'])
	let objectStore = transaction.objectStore('teachers')
	let data = objectStore.get(1)

	data.onsuccess = (e) => {
		console.log(data.result)
	}

	console.log('all')

	objectStore.openCursor().onsuccess = (e) => {
		let cursor = e.target.result

		if (!cursor) {
			return
		}

		console.log(cursor.value)
		cursor.continue()
	}
}

function remove() {
	console.log('removing')

	let transaction = db.transaction(['teachers'], 'readwrite')
	let objectStore = transaction.objectStore('teachers').delete(1)

	objectStore.onsuccess = (e) => {
		console.log('removed')
	}
}