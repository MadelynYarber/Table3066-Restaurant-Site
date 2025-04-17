function newMenu(event) {
  event.preventDefault();

  const foodn = document.getElementById("fdname").value.trim();
  const price = document.getElementById("price").value.trim();

  if (!foodn || !price) return;

  addMenuItemToTable(foodn, price);
  saveMenuItem(foodn, price);

  document.getElementById("fdname").value = "";
  document.getElementById("price").value = "";
}

function addMenuItemToTable(food, price, fromStorage = false) {
  const table = document.getElementById("menuTable");
  const row = document.createElement("tr");

  const foodCell = document.createElement("td");
  foodCell.textContent = food;

  const priceCell = document.createElement("td");
  priceCell.textContent = `$${price}`;

  const actionCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    table.removeChild(row);
    deleteMenuItem(food, price);
  };
  actionCell.appendChild(deleteBtn);

  row.appendChild(foodCell);
  row.appendChild(priceCell);
  row.appendChild(actionCell);
  table.appendChild(row);
}

function saveMenuItem(food, price) {
  const items = JSON.parse(localStorage.getItem("menuItems") || "[]");
  items.push({ food, price });
  localStorage.setItem("menuItems", JSON.stringify(items));
}

function deleteMenuItem(food, price) {
  let items = JSON.parse(localStorage.getItem("menuItems") || "[]");
  items = items.filter(item => !(item.food === food && item.price === price));
  localStorage.setItem("menuItems", JSON.stringify(items));
}

window.addEventListener("DOMContentLoaded", () => {
  const items = JSON.parse(localStorage.getItem("menuItems") || "[]");
  items.forEach(item => addMenuItemToTable(item.food, item.price, true));
});

function open_closed() {
  const days_in_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date();
  const day = days_in_week[now.getDay()];
  const hour = now.getHours();
  let open_message = "";

  if (day === "Sunday" || day === "Monday") {
    open_message = "Sorry, we are currently closed.";
  } else if (hour >= 12 && hour < 19) {
    open_message = "We are currently open!";
  } else {
    open_message = "Sorry, we are currently closed.";
  }

  const openClosedElement = document.getElementById("open_closed");
  if (openClosedElement) {
    openClosedElement.innerHTML = open_message;
  }
}
