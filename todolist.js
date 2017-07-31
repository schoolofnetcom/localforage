let store = localforage.createInstance({
	driver: localforage.INDEXEDDB,
	name: 'TODO_LIST',
	version: 1,
	storeName: 'todos',
	description: 'Todos storename'
})

let ID = 0

function create(e) {
	console.log('create')
	
	ID = ID + 1

	store.setItem(ID, { name: $('#todo_name').val(), id: ID })
		 .then((value) => {
			$('#table_data > tbody:last').append(
				'<tr data-id="' + value.id + '">' +
					'<td>' + value.name + '</td>' +
					'<td> <button type="button" class="btn btn-danger" onClick="remove(' + value.id + ')">Delete</button> </td>' +
				'</tr>'
			)

			$('#todo_name').val('')
		 })


}

function remove(id) {
	console.log('remove')
	store.removeItem(id)
		 .then(() => {
			$('#table_data tr[data-id="' + id + '"]').remove()
		 })
}