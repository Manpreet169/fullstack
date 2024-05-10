class Product {
  constructor(_name, _description, _price) {
    this.name = _name;
    this.description = _description;
    this.price = _price;
  }
}

const addressBarContent = new URLSearchParams(location.search);
const eventId = addressBarContent.get("eventId");
console.log("EVENTID?", eventId);

let eventToModify;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZmRjZjgxODQ0MjAwMTUzNzU5Y2UiLCJpYXQiOjE3MTUzMzg3MDMsImV4cCI6MTcxNjU0ODMwM30.u0S83eQTUi91qALYvID0-grSDfNofv_pvKKKy1Y25-s";

const getEventData = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error occurred while getting the information");
      }
    })
    .then((event) => {
      console.log("DETAILS RECOVERED", event);
      document.getElementById("name").value = event.name;
      document.getElementById("description").value = event.description;
      document.getElementById("price").value = event.price;

      eventToModify = event;
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
};

if (eventId) {
  getEventData();
  document.getElementsByClassName("btn-primary")[0].innerText = "Edit";
}

const submitEvent = function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const descriptionInput = document.getElementById("description");
  const priceInput = document.getElementById("price");

  const ProductFromForm = new Product(
    nameInput.value,
    descriptionInput.value,
    priceInput.value
  );

  console.log("PRODUCT TO SEND TO API", ProductFromForm);

  let URL = "https://striveschool-api.herokuapp.com/api/product/";
  let methodToUse = "POST";

  if (eventId) {
    URL = `https://striveschool-api.herokuapp.com/api/product/${eventToModify._id}`;
    methodToUse = "PUT";
  }

  fetch(URL, {
    method: methodToUse,
    body: JSON.stringify(ProductFromForm),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        alert(`Product ${eventId ? "edited" : "created"}!`);
      } else {
        throw new Error("Error while saving the resource");
      }
    })
    .catch((err) => {
      console.log("ERROR", err);
      alert(err);
    });
};

document.getElementById("event-form").addEventListener("submit", submitEvent);
