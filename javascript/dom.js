function alertPage() {
  alert("Hello");
  console.log("Hello");
}

// const btn = document.getElementsByTagName("button");
// const btn = document.getElementsByClassName("btn");
// const btn = document.getElementById("clickBtn");
// const btn = document.querySelectorAll("button");

// const btn = document.querySelector(".btn");
// const resetBtn = document.querySelector(".resetBtn");
// const div = document.querySelector(".container");

// btn.addEventListener("click", () => {
//   div.style.backgroundColor = "black";
//   resetBtn.style.display = "inline";
//   btn.style.display = "none";
// });

// resetBtn.addEventListener("click", () => {
//   div.style.backgroundColor = "white";
//   resetBtn.style.display = "none";
//   btn.style.display = "inline";
// });

// console.log(btn.innerHTML, " :BTN TEXT");
// btn.innerHTML = "More";

// console.log(btn);

const openBtn = document.querySelector(".btn");
const cancelBtn = document.querySelector(".cancelBtn");
const container = document.querySelector(".container");

openBtn.addEventListener("click", () => {
  container.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  container.style.display = "none";
});
