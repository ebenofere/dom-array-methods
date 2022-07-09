const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

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

  console.log(newUser, "newUser");
}
