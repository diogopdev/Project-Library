// Get Elements
const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const addBookForm = document.getElementById('addBookForm')
const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const btnCancelBook = document.getElementById('btnCancelBook');
const overlay = document.getElementById('overlay');
const bookGrid = document.getElementById('grid')

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

// Class and functions for Books
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

// class Library {
// 	constructor() {
// 		this.books = []
// 	}
// }

const resetBookGrid = () => {
	bookGrid.innerHTML = ''
}

const createCard = () => {
	for(let i = 0; i < myLibrary.length; i++){
		const card = document.createElement('div')
		const cardTitle = document.createElement('div')
		const cardAuthor = document.createElement('div')
		const cardPages = document.createElement('div')
		const cardButtons = document.createElement('div')
		const readButton = document.createElement('button')
		const deleteButton = document.createElement('button')

		card.setAttribute('data-index', i)
		card.classList.add('card')
		cardTitle.classList.add('card-title')
		cardAuthor.classList.add('card-author')
		cardPages.classList.add('card-pages')
		cardButtons.classList.add('card-buttons')
		deleteButton.classList.add('card-delete')

		cardTitle.textContent = '"' + myLibrary[i].title + '"' 
		cardAuthor.textContent = myLibrary[i].author
		cardPages.textContent = myLibrary[i].pages + ' pages'
		deleteButton.textContent = 'Delete'

		if (myLibrary[i].isRead){
			readButton.textContent = 'Read'
			readButton.classList.add('card-read')
		} else {
			readButton.textContent = 'Not Read'
			readButton.classList.add('card-not-read')
		}

		bookGrid.appendChild(card)
		card.appendChild(cardTitle)
		card.appendChild(cardAuthor)
		card.appendChild(cardPages)
		card.appendChild(cardButtons)
		cardButtons.appendChild(readButton)
		cardButtons.appendChild(deleteButton)
	}
	
}

const getBook = (e) => { //Gets inputs, calls(checkInput) and pushes to myLibrary[array]
	e.preventDefault()
	const title = document.getElementById('title').value
	const author = document.getElementById('author').value
	const pages = document.getElementById('pages').value
	const isRead = document.getElementById('isRead').checked
	if(checkInput(title, author, pages) === 1){
		myLibrary.push(new Book(title, author, pages, isRead))
		closeAddBookModal()
		resetBookGrid()
		createCard()
		console.log(myLibrary)
	}
}

const checkInput = (title, author, pages) => { //Checks inputs and warns with red border - return 1 means everything's OK
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


bookGrid.addEventListener('click', (e) => { // Read and Not Read Toggle
	if(e.target.classList.contains('card-read')){
		const card = e.target.closest('.card')
		const dataIndex = card.getAttribute('data-index')
		myLibrary[dataIndex].isRead = false
		e.target.textContent = 'Not Read'
		e.target.classList.remove('card-read')
		e.target.classList.add('card-not-read')
		console.log(myLibrary[dataIndex])
	} else if (e.target.classList.contains('card-not-read')){
		const card = e.target.closest('.card')
		const dataIndex = card.getAttribute('data-index')
		myLibrary[dataIndex].isRead = true
		e.target.textContent = 'Read'
		e.target.classList.add('card-read')
		e.target.classList.remove('card-not-read')
		console.log(myLibrary[dataIndex])
	}
})

bookGrid.addEventListener('click', (e) => {
	if(e.target.classList.contains('card-delete')){
		const card = e.target.closest('.card')
		const dataIndex = card.getAttribute('data-index')
		myLibrary.splice(dataIndex, 1)
		resetBookGrid()
		createCard()
		console.log(myLibrary)
	}
})

// Button Clicks and function calls
addBookBtn.onclick = openAddBookModal //Opens Modal
btnCancelBook.onclick = closeAddBookModal //Closes Modal on button click
overlay.onclick = closeAddBookModal //Closes Modal on overlay click
addBookForm.onsubmit = getBook //Submits Form
