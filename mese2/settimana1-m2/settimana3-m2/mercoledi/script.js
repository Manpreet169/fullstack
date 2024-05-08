function loadBooks() {
  $.get("https://striveschool-api.herokuapp.com/books")
    .done(function (data) {
      displayBooks(data);
    })
    .fail(function (error) {
      console.error("Errore nel caricamento dei libri:", error);
    });
}

function displayBooks(books) {
  var booksContainer = $("#booksContainer");

  books.forEach(function (book) {
    var card = `
        <div class="col">
          <div class="card h-100">
            <img src="${book.img}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">Prezzo: $${book.price}</p>
              <button class="btn btn-danger" onclick="removeBook(this)" data-book-id="${book.asin}">Scarta</button>
            </div>
          </div>
        </div>
      `;
    booksContainer.append(card);
  });
}

function removeBook(button) {
  var bookId = $(button).data("book-id");
  $(button).closest(".col").remove();
}

$(document).ready(function () {
  loadBooks();
});
