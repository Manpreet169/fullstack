document.getElementById("year").innerText = new Date().getFullYear();

const generateProductsCards = function (ProductsArray) {
  const row = document.getElementById("events-row");
  ProductsArray.forEach((product) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
      <div class="card h-100 d-flex flex-column">
        <img src="https://i.etsystatic.com/11394201/r/il/5375d7/2735484042/il_570xN.2735484042_83wd.jpg">
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text">${product.brand}</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary">${product.price}€</button>
            <a href="details.html?eventId=${product._id}" class="btn btn-info">INFO</a>
          </div>
        </div>
      </div>
      `;
    row.appendChild(newCol);
  });
};

const getEvents = function () {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZmRjZjgxODQ0MjAwMTUzNzU5Y2UiLCJpYXQiOjE3MTUzMzg3MDMsImV4cCI6MTcxNjU0ODMwM30.u0S83eQTUi91qALYvID0-grSDfNofv_pvKKKy1Y25-s";
  // recuperiamo la lista di eventi attualmente nel database
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella risposta del server");
      }
    })
    .then((array) => {
      // creiamo le card per la landing page
      generateProductsCards(array);
    })
    .catch((err) => {
      console.log("ERRORE!", err);
    });
};

getEvents();
