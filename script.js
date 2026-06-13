import { UpdateUi } from './ui.js'

const userEl = document.querySelector('.user')

fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(data => UpdateUi(data))
	.catch(err => console.log(err))
