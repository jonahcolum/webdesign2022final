// Write JavaScript here
const btn = document.querySelector(".bgbtn")
const body = document.querySelector("body")

btn.addEventListener("click", () => {
  body.classList.toggle("bg")
})