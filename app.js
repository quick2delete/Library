const plusImg = document.querySelector(".plusImg");
const modal = document.querySelector(".modal");
const inputTitle = document.querySelector(".title");
const inputAuthor = document.querySelector(".author");

const btn = document.querySelector("input[type=button]");

let bookList = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}
function addBookToList() {
  console.log(inputTitle.value);
  const newBook = new Book(inputTitle.value, inputAuthor.value);
  bookList.push(newBook);
  modal.style.opacity = "0";
  console.log(bookList);
  content.createElement('div')
  div.classList.add('list')
  list.textContent=inputTitle.value
}

addBookToList();

plusImg.addEventListener("click", () => {
  modal.style.opacity = "1";
});

btn.addEventListener("click", addBookToList);
