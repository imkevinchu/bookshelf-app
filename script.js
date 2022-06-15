class Book {
  constructor(title = "Title", author = "Author", pages = 0, hasRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }
}

class Bookshelf {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook);
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  getBook(title) {
    return (this.books = this.books.find((book) => book.title === title));
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }
}

const bookshelf = new Bookshelf();

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
