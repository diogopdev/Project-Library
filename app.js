// Get Elements
const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const addBookForm = document.getElementById('addBookForm')
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const btnCancelBook = document.getElementById('btnCancelBook');
const overlay = document.getElementById('overlay');

// Functions to create and close Modal
const openAddBookModal = () => {
	addBookForm.reset()
	addBookModal.classList.add('active')
	overlay.classList.add('active')
}

const closeAddBookModal = () => {
	addBookForm.reset()
	titleInput.classList.remove('redBorder')
	authorInput.classList.remove('redBorder')
	pagesInput.classList.remove('redBorder')
	addBookModal.classList.remove('active')
	overlay.classList.remove('active')
}

// Classes for Books
let myLibrary = []

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

const getBook = (e) => {
	e.preventDefault()
	const title = document.getElementById('title').value
	const author = document.getElementById('author').value
	const pages = document.getElementById('pages').value
	const isRead = document.getElementById('isRead').checked
	if(checkInput(title, author, pages) === 1){
		myLibrary.push(new Book(title, author, pages, isRead))
		closeAddBookModal()
		console.log(myLibrary)
	}
}

const checkInput = (title, author, pages) => {
	if (title == ''){
		titleInput.classList.add('redBorder')
		return 0
	} else
		titleInput.classList.remove('redBorder')

	if (author == '') {
		authorInput.classList.add('redBorder')
		return 0
	} else 
		authorInput.classList.remove('redBorder')

	if (pages <= 0) {
		pagesInput.classList.add('redBorder')
		return 0
	} else
		pagesInput.classList.remove('redBorder')
	return 1
}

// Button Clicks and function calls
addBookBtn.onclick = openAddBookModal //Opens Modal
btnCancelBook.onclick = closeAddBookModal //Closes Modal on button click
overlay.onclick = closeAddBookModal //Closes Modal on overlay click
addBookForm.onsubmit = getBook //Submits Form