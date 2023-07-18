let $ = document;
const titleInput = $.getElementById("title");
const authorInput = $.getElementById("author");
const yearInput = $.getElementById("year");

const btnElem = $.querySelector(".btn");

const resTitle = $.getElementById("res-title");
const resAuthor = $.getElementById("res-author");
const resYear = $.getElementById("res-year");

let bookArray = [];

function generator(bookArray) {

  bookArray.forEach(function (item) {

    let titleSpanNew = $.createElement("span");
    titleSpanNew.classList.add("text");
    titleSpanNew.innerHTML = item.title;

    let authorSpanNew = $.createElement("span");
    authorSpanNew.classList.add("text");
    authorSpanNew.innerHTML = item.author;

    let yearSpanNew = $.createElement("span");
    yearSpanNew.classList.add("text");
    yearSpanNew.innerHTML = item.year;

    resTitle.append(titleSpanNew);
    resAuthor.append(authorSpanNew);
    resYear.append(yearSpanNew);

  });

}

function add() {
  let title = titleInput.value;
  let author = authorInput.value;
  let year = yearInput.value;

  if (title && author && year) {

    let book = {
      title: title,
      author: author,
      year: year,
    };

    bookArray.push(book);
    saveLocal(bookArray);

  } else {
    alert("Please enter your book");
  }

  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";

}

function saveLocal(bookArray) {

  localStorage.setItem("listBook", JSON.stringify(bookArray));
  generator(bookArray);

}


window.onload = function () {
  
  let getLocalList = JSON.parse(localStorage.getItem("listBook"));

  if (getLocalList) {
    bookArray = getLocalList;
    generator(bookArray);
  } else {
    bookArray = [];
  }

};


btnElem.addEventListener("click", add);
