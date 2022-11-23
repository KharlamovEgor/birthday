"use strict";

const happy = document.querySelector(".happy");
const some = document.querySelector(".some");

happy.addEventListener("click", () => {
  some.classList.add("active");
});

some.addEventListener("click", () => {
  some.classList.remove("active");
});
