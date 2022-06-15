let myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.showInfo = function () {
  let hasReadText = this.hasRead ? "read" : "unread";
  return `${this.title} by ${this.author}, ${this.pages} pages, ${hasReadText}`;
};

const book1 = new Book("Travels With Charley", "John Steinbeck", 244, true);
console.log(book1.showInfo());

function addBookToLibrary(book) {}

const btnAddBook = document.getElementById("add-book");
btnAddBook.addEventListener("click", openAddBookForm);

const openAddBookForm = () => {};
