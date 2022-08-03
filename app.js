const plusImg = document.querySelector(".plusImg");
const modal = document.querySelector(".modal");
const inputTitle = document.querySelector(".title");
const inputAuthor = document.querySelector(".author");
const inputRead = document.querySelector(".read");
const container = document.querySelector(".container");
const containerList = document.querySelector(".containerList");

const btn = document.querySelector("input[type=button]");

let bookList = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToList() {
  console.log(inputTitle.value);
  const newBook = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputRead.value
  );
  bookList.push(newBook);
}
addBookToList();

plusImg.addEventListener("click", () => {
  modal.style.opacity = "1";
});

btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.classList.add("listItem");
  div.innerHTML = `<p>${inputTitle.value}</p> <p>${inputAuthor.value}</p><p>${inputRead.value}</p>`;
  containerList.appendChild(div);
  modal.style.opacity = "0";
  inputTitle.value = "";
  inputAuthor.value = "";
  inputRead.value = "";
  console.log(bookList);
});
