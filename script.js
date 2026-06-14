import { updateUi } from './ui.js'

fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
	.then(res => res.json())
	.then(data => updateUi(data))
	.catch(err => console.log(err))
