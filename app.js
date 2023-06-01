// let myLibrary = [];

// function Book(title, author, pages, read) {
// 	this.title = title
// 	this. author = author
// 	this.pages = pages
// 	this.read = read
// }

// function addBookToLibrary(){

// }

const addBookBtn = document.getElementById('addBookBtn')
const addBookModal = document.getElementById('addBookModal')
const addBookForm = document.getElementById('addBookForm')
const btnCancelBook = document.getElementById('btnCancelBook');

const openAddBookModal = () => {
	addBookForm.reset()
	addBookModal.classList.add('active')
}

const closeAddBookModal = () => {
	addBookForm.reset()
	addBookModal.classList.remove('active')
}

addBookBtn.onclick = openAddBookModal
btnCancelBook.onclick = closeAddBookModal