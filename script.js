class Book {
  constructor(title = "Title", author = "Author", pages = 0, hasRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }

  showInfo() {
    let hasReadText = this.hasRead ? "read" : "unread";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${hasReadText}`;
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
    toggleEmptyStateDisplay();
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    toggleEmptyStateDisplay();
  }

  getBook(title) {
    return (this.books = this.books.find((book) => book.title === title));
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }

  isEmpty() {
    return this.books.isEmpty();
  }
}

const bookshelf = new Bookshelf();

// const book1 = new Book("Travels With Charley", "John Steinbeck", 244, true);
// bookshelf.addBook(book1);
// console.log(book1.showInfo());

const addBookBtn = document.getElementById("addBookBtn");
const addBookSubmitBtn = document.getElementById("addBookSubmitBtn");
const formContainer = document.getElementById("formContainer");
const formOverlay = document.getElementById("formOverlay");
const formCloseBtn = document.getElementById("close");
const emptyState = document.getElementById("emptyState");

const openAddBookForm = () => {
  formOverlay.classList.add("active");
  formContainer.classList.add("active");
};

const closeAddBookForm = () => {
  formOverlay.classList.remove("active");
  formContainer.classList.remove("active");
};

const toggleEmptyStateDisplay = () => {
  if (bookshelf.isEmpty()) {
    emptyState.classList.add("active");
  } else {
    emptyState.classList.remove("active");
  }
};
