// Get Elements
const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const addBookForm = document.getElementById('addBookForm')
const btnCancelBook = document.getElementById('btnCancelBook');

// Functions to create and close Modal
const openAddBookModal = () => {
	addBookForm.reset()
	addBookModal.classList.add('active')
}

const closeAddBookModal = () => {
	addBookForm.reset()
	addBookModal.classList.remove('active')
}

// Classes for Books
class Book {
	constructor(
		title = 'Unknown',
		author = 'Unkown',
		pages = '0',
		isRead = false
	){
		this.title = title
		this. author = author
		this.pages = pages
		this.isRead = isRead
	}
}

const getBook = () => {
	const title = document.getElementById('title').value
	const author = document.getElementById('author').value
	const pages = document.getElementById('pages').value
	const isRead = document.getElementById('isRead').checked
	return new Book(title, author, pages, isRead)
}

const addBook = (e) => {
	e.preventDefault()
	const newBook = getBook()
	console.log(newBook)
	closeAddBookModal()
}

// Button Clicks and function calls
addBookBtn.onclick = openAddBookModal //Opens Modal
btnCancelBook.onclick = closeAddBookModal //Closes Modal
addBookForm.onsubmit = addBook //Submits Form