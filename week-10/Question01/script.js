const main = document.querySelector("#main");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

main.addEventListener("click", (e) => {
  if (e.target.id === "open" || e.target.id === "open__btn") {
    sideBar.style.transform = "translateX(0)";
    overlay.style.display = "block";
  }
});

overlay.addEventListener("click", () => {
  sideBar.style.transform = "translateX(-220px)";
  overlay.style.display = "none";
});
