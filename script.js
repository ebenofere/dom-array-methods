const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();

// Fetch random user and add mone
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  console.log(data, "data");

  const user = data.results[0];
  console.log(user, "user");

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.round(Math.random() * 1000),
  };

  addData(newUser);
}

// Add new obj to data array
function addData(obj) {
  data.push(obj);

  updateDOM();
}

function updateDOM(providedData = data) {
  console.log(providedData, "provided data");

  main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;

    main.appendChild(element);
  });
}
