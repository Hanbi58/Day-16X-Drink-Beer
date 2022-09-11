const cupholder = document.querySelector(".cupHolder");
const smallCups = document.querySelectorAll(".smallCup");
const cupMain = document.querySelector(".cupMain");

let cupCount = 0;
cupholder.addEventListener("click", (e) => {
  if (e.target.id && e.target.id !== cupCount) {
    cupCount = e.target.id;
    paintCups();
  } else if (e.target.id === cupCount) {
    cupCount = cupCount - 1;
    paintCups();
  }
});

function paintCups() {
  smallCups.forEach((smallCup, idx) => {
    if (idx < cupCount) {
      smallCup.style.backgroundColor = "royalblue";
    } else {
      smallCup.style.backgroundColor = "white";
    }
  });
  const precentage = cupCount * 12.5;
  console.log(precentage);
  cupMain.style.backgroundImage = `linear-gradient(
    to top,
    royalblue 0%,
    royalblue ${precentage}%,
    white ${precentage}%,
    white 100%
  )`;
}
