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
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  toggleRead(title) {
    return;
  }

  getBook(title) {
    return (this.books = this.books.find((book) => book.title === title));
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }

  isEmpty() {
    return this.books.length === 0;
  }
}

const bookshelf = new Bookshelf();

const book1 = new Book("Travels With Charley", "John Steinbeck", 244, true);
const book2 = new Book(
  "Around the World in Eighty Days",
  "Jules Verne",
  160,
  true
);
const book3 = new Book("The Da Vinci Code", "Dan Brown", 489, false);
bookshelf.addBook(book1);
bookshelf.addBook(book2);
bookshelf.addBook(book3);
console.log(book1.showInfo());

const addBookBtn = document.getElementById("addBookBtn");
const addBookForm = document.getElementById("addBookForm");
const addBookSubmitBtn = document.getElementById("addBookSubmitBtn");
const formContainer = document.getElementById("formContainer");
const formOverlay = document.getElementById("formOverlay");
const formCloseBtn = document.getElementById("close");
const emptyState = document.getElementById("emptyState");
const bookGrid = document.getElementById("bookGrid");

const openAddBookForm = () => {
  formOverlay.classList.add("active");
  formContainer.classList.add("active");
};

const closeAddBookForm = () => {
  formOverlay.classList.remove("active");
  formContainer.classList.remove("active");
  addBookForm.reset();
};

const addBookFromForm = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const hasRead = document.getElementById("hasRead").checked;
  const newBook = new Book(title, author, pages, hasRead);

  bookshelf.addBook(newBook);
  closeAddBookForm();
  updateGrid();
};

const updateGrid = () => {
  resetGrid();
  toggleEmptyStateDisplay();
  displayBooks();
};

const resetGrid = () => {
  bookGrid.innerHTML = "";
};

const displayBooks = () => {
  for (let book of bookshelf.books) {
    createBookCard(book);
  }
};

const toggleEmptyStateDisplay = () => {
  if (bookshelf.isEmpty()) {
    emptyState.classList.add("active");
  } else {
    emptyState.classList.remove("active");
  }
};

const createBookCard = (book) => {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const buttonGroup = document.createElement("div");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookCard.classList.add("book-card");
  buttonGroup.classList.add("button-group");
  readBtn.classList.add("btn");
  removeBtn.classList.add("btn");

  title.textContent = `"${book.title}"`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = "Remove";

  readBtn.onclick = bookshelf.toggleRead(title);
  removeBtn.onclick = bookshelf.removeBook(title);

  if (book.hasRead) {
    readBtn.textContent = "Read";
    readBtn.classList.add("btn-light-green");
  } else {
    readBtn.textContent = "Not read";
    readBtn.classList.add("btn-light-red");
  }

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  buttonGroup.appendChild(readBtn);
  buttonGroup.appendChild(removeBtn);
  bookCard.appendChild(buttonGroup);
  bookGrid.appendChild(bookCard);
};

window.onload = updateGrid();
